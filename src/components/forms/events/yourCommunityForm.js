import React from 'react'
import { FormSpy, Field } from "react-final-form";
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
  Label
} from 'semantic-ui-react';
import { countryOptions } from '../optionsData/countryOptions';
import { DatePicker, InputCheckBox, InputText, DropdownMenu } from '../eventFormfields/EventFormfields';

function YourCommunityForm(props) {
  const {  pristine, prevStep, nextStep} = props;
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header sub color='teal' content='Your Community' style={{ marginBottom: 15 }} />
          <Form>
            <Form.Group widths='equal'>
              <Form.Field width={7} >
                <Field
                  name='suburb'
                  type='text'
                  position='top left'
                  placeholder='Your Suburb'
                  component={InputText}
                  subscription={{ value: true, active: true, error: true, touched: true }}
                />
              </Form.Field>
              <Form.Field width={5} >
                <Field
                  name='zipCode'
                  type='text'
                  position='top center'
                  placeholder='ZIP/Postal Code'
                  component={InputText}
                  subscription={{ value: true, active: true, error: true, touched: true }}
                />
              </Form.Field>
              <Form.Field width={6} >
                <Field
                  name="country"
                  type="dropdown"
                  position='top right'
                  label="Select your Country"
                  component={DropdownMenu}
                  options={countryOptions}
                  subscription={{ value: true, active: true, error: true, touched: true }} />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Form.Field>
                <Label style={{ background: '#fefafa', padding: '15px 10px' }}>
                  Select Expected time or season.  tempora hic. Nihil natus eligendi minus deleniti error?
                </Label>
              </Form.Field>
              <Form.Field>
                <Field
                  name='best_time'
                  type='date'
                  icon='calendar alternate outline'
                  iconPosition='left'
                  style={{ color: '#CC3333' }}
                  component={DatePicker}
                  placeholder='Select your Target'
                />
              </Form.Field>
            </Form.Group>
            <Header sub color='teal' content='Your Network' style={{ margin: 15 }} />
            <Form.Field >
              <Field
                name="local_council_relationship"
                label="Do You have a relationship with your local Counci?"
                type="checkbox"
                component={InputCheckBox}
                subscription={{ value: true, active: true, error: true, touched: true }} />
            </Form.Field>
            <FormSpy subscription={{ values: true, errors: true }}>
              {({ values, errors }) => (
                !values.local_council_relationship ? null :
                <Form.Field >
                  <Field
                    name='local_council_details'
                    type='text'
                    placeholder='Please enter the Council name'
                    component={InputText}
                    subscription={{ value: true, active: true, error: true, touched: true }}
                  />
                </Form.Field>
              )}
            </FormSpy>

            <Form.Field >
              <Label style={{ background: '#fefafa', padding: 10 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non,
                delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ...
              </Label>
              <Field
                name='key_influencers'
                type='text'
                placeholder='Please enter key people in your organization'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Button label="Continue" color='red' disabled={pristine} onClick={nextStep} />
            <Button label="Back" primary={false} disabled={pristine} onClick={prevStep} />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default YourCommunityForm
