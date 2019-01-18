import React, { Fragment, Component } from 'react';
import RegistrationForm from './RegistrationForm'
import { api } from '../api/init';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

export default class Authentication extends Component {

    handleSubmit = async (event) => {
        event.preventDefault();
        const userRoute = this.props.type === 'register' ? '/users/register' : '/users/login';
        try {
            const response = await api.post(userRoute, {
                email: event.target.email.value,
                password: event.target.password.value
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was a problem authenticating user', error);
        };
    };

    render() {
        return (
            <Fragment>
                {this.props.type === 'register' && <RegistrationForm submit={this.handleSubmit} />}
                {this.props.type === 'login' && <LoginForm submit={this.handleSubmit} />}
            </Fragment>
        );
    };
};

Authentication.propTypes = {
    type: PropTypes.oneOf(['register', 'login', 'logout']).isRequired
};
