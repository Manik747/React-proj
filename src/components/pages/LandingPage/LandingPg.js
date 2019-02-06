import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button } from 'semantic-ui-react';
import {Grid, Cell} from 'react-mdl';

import GarageSaleVid from './Youtube'
import InfoPg from './InfoPg';
import FlashMessage from "../../forms/Messages/FlashMessage";
import Footer from '../Footer'


class LandingPg extends Component {

onClickMore() {
    document.getElementById('info').scrollIntoView()
}

  render() {
      const {loggedIn, loggedOut, role} = this.props;
      console.log('This.props.loggedIn | role from landing page', this.props.loggedIn)
    return (
      <div>
        <Grid className="landing-grid">
        {
          loggedIn && role === 'user' &&
            <FlashMessage 
            color='#cb3538'
            message={'You have signed in successfully...   '} 
            />
        }
        {
          loggedOut && 
            <FlashMessage
                color='#cb3538'
                message={'You have signed out successfully...   ' }
                />

        }
            <div className="banner-text">
                <img src="/Assets/WBGS-logo.png" className="logo"/>
                <hr/>  
                <GarageSaleVid videoId='SkiTGS_ThA0'/>   
            </div>
        </Grid>
        <div className="call-to-act">
            <div className="call1">
                <p>WE BELIEVE WE CAN MAKE A POSITIVE IMPACT ON PEOPLE’S LIVES AND 
                THE FUTURE OF THE PLANET THROUGH THE EVENTS AND EXPERIENCES WE CREATE.</p>
            </div>
            <div className="call2">
                <Button inverted size="massive" floated="right" onClick={this.onClickMore}> Find out more </Button>
            </div> 
        </div>
                 
        <InfoPg/> 
        <Footer />
    </div>
    
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loggedOut: state.auth.logout,
  role: state.auth.authenticatedUserRole,
});

export default connect(mapStateToProps, { })(LandingPg);