import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { withLastLocation } from 'react-router-last-location';
import { authenticateUser, logoutUser } from "../../redux/actions/authenticateUserAction";

class Authentication extends Component {
    // componentDidMount(){
    //     this.props.getSessionAuthToken("AuthToken");
    // }
    handleSubmit = (event) => {
        event.preventDefault();
        const userRoute = this.props.history.location.pathname;
        console.log('User Route', userRoute);

        const postData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        this.props.authenticateUser(userRoute, postData);
    };

    render() {
        const { isLoggingIn, loggedIn, role, error } = this.props
        const authType = this.props.history.location.pathname.split('/')[2];
        
        console.log('props here all the way | isLoggingIn', this.props.history, isLoggingIn)
        console.log('props errors logging in', this.props.error)
        let flash = false;
        if (error) flash = error.response;
        console.log('props errors logging in', flash)

        return (
            <Fragment>
                {loggedIn && role === 'admin' && <Redirect to='/dashboard' />}
                {loggedIn && role === 'user' && <Redirect to='/' />}
                {authType === 'logout' && <Redirect to='/' />}
                {authType === 'register' && <RegistrationForm loading={isLoggingIn} flash={flash} submit={this.handleSubmit} />}
                {authType === 'login' && <LoginForm loading={isLoggingIn} flash={flash} submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    loggedIn: state.auth.loggedIn,
    isLoggingIn: state.auth.logging,
    user: state.auth.authenticatedUserEmail,
    role: state.auth.authenticatedUserRole,
    error: state.auth.authError,
})

// connect function takes two arguments; 
// The first defines the data being pulled from store into the called component - mapStateToProps
// The second defines the actions being sent from the called component to update the store - mapDispatchToProps
// Both of these data are added to the component props
export default connect(mapStateToProps, { authenticateUser, logoutUser })(withLastLocation(Authentication));
