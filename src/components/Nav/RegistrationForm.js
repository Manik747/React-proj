import React, { Fragment } from 'react';

export default function RegistrationForm(props) {
    const { onSubmit } = props
    return (
        <Fragment>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email: <input type='email' name='email' /></label><br />
                <label htmlFor='password'>Password: <input type='password' name='password' /></label><br />
                <button type='submit'>Register</button>
            </form>
        </Fragment>
    )
};
