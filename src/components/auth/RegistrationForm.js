import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import IsLoadingInfoMessage from "../forms/Messages/loadingInfoMessage";
import FlashMessage from "../forms/Messages/FlashMessage";

export default function RegistrationForm(props) {
    const { submit, loading, flash } = props
    console.log("Flashes From Registeration Form", flash);
    return (
        <div>
          {
            flash && flash.status === 500 &&
            <FlashMessage
                color='red'
                message={"A user with the given username is already registered ... "}
            />
          }
            <div className='register-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/Assets/WBGS-logo.png' /> Sign up for for a free account
                    </Header>
                        <Form onSubmit={submit} size='large'>
                            <Segment raised>
                                <Form.Input fluid icon='user' iconPosition='left' name='email' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    name='password'
                                    type='password'
                                />
                                <Button color='teal' fluid size='large'>Submit</Button>
                                {loading && <IsLoadingInfoMessage info='Just one moment...' />}
                            </Segment>
                        </Form>
                        <Message>
                            Already have an account?<Link to='/users/login'>Log In</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
};

RegistrationForm.propTypes = {
    submit: PropTypes.func.isRequired
};