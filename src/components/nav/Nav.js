import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

import { logoutUser } from "../../redux/actions/authenticateUserAction";

import LoginMenu from './LoginMenu';
import LogoutMenu from './LogoutMenu';

class Nav extends Component {
    state = {
        activeItem: ''
    }
    capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOnLoginClick = (e, { name }) => {
        console.log('handleOnLoginClick');
        this.setState({ activeItem: name });
    }
    handleOnSignoutClick = e => {
        console.log('handleOnSignoutClick');
        this.props.logoutUser();
        
        // Remove all saved data from sessionStorage
        sessionStorage.clear();
    }
    handleOnRegisterClick = (e, { name }) => {
        console.log('handleOnRegister');
        this.setState({ activeItem: name });
    }

    render() {
        const { loggedIn, userRole, emailToken } = this.props;
        const { activeItem } = this.state;
        console.log('emailToken | userRole', emailToken, userRole)
        return (
            <Menu pointing secondary className="sticky" icon='labeled' size='mini' style={{ padding: '0px 20px' }}  >
                <Menu.Item
                    as={NavLink} to='/'
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    style={dodgerRed}
                    exact activeClassName="active red"
                >
                    <Icon name='home' />HOME
                </Menu.Item>
                <Menu.Item
                    as={NavLink} to='/about'
                    name='about'
                    active={activeItem === 'info'}
                    onClick={this.handleItemClick}
                    activeClassName="active red"
                    style={dodgerRed}
                >
                    <Icon name='info' />ABOUT
                </Menu.Item>
                {loggedIn && userRole === 'admin' &&
                    <Menu.Item
                        as={NavLink} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'users'}
                        onClick={this.handleItemClick}
                        style={dodgerRed}
                        activeClassName="active red"
                    >
                        <Icon name='users' />DASHBOARD
                    </Menu.Item>
                }

                <Menu.Item
                    position='right'
                    as={NavLink} to='/create'
                    name='create'
                    active={activeItem === 'add'}
                    onClick={this.handleItemClick}
                    activeClassName="active red"
                    style={dodgerRed}
                >
                    <Icon name='add circle' />CREATE EVENT
                </Menu.Item>
                {/* {loggedIn && loggedInAsAdmin && (<Menu.Item
                        as={NavLink} to='/dashboard'
                        name='dashboard'
                        active={activeItem === 'users'}
                        onClick={this.handleItemClick}
                        activeClassName="active teal" >
                        <Icon name='users' />Dashboard
                        </Menu.Item>)
                } */}

                {
                    loggedIn && emailToken
                        ? (<LoginMenu
                            username={(emailToken.split('@')[0]).toUpperCase()}
                            onLogout={this.handleOnSignoutClick} />)
                        : (<LogoutMenu
                            style={dodgerRed}
                            active={activeItem === 'sign in'}
                            onLogin={this.handleOnLoginClick}
                            onRegister={this.handleOnRegisterClick} />)
                }

            </Menu>
        );

    };
};

Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    // emailToken: PropTypes.object.isRequired,
    // userRole: PropTypes.object.isRequired,

};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    emailToken: state.auth.authenticatedUserEmail,
    userRole: state.auth.authenticatedUserRole,

})

const dodgerRed = {
    fontFamily: 'Raley, sans-serif',
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 2,
    color: '#9d9d9d',
    // background: 'yellow'

}
// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default withRouter(connect(mapStateToProps, { logoutUser })(Nav));

// const Navi = props => (
//     <NavLink
//         exact
//         {...props}
//         activeClassName="active"
//     />
// );

// const Navigation = () => (
//     <Menu secondary>
//         <Menu.Item as={Navi} to="/homes" name="homes" />
//         <Menu.Item as={Navi} to="/aboutu" name="messages" />
//         <Menu.Item as={Navi} to="/sample" name="friends" />
//     </Menu>
// );
