import React from 'react';
import { FormSpy, Field } from "react-final-form";
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
  Label
} from 'semantic-ui-react';

import {targetOptions} from '../optionsData/targetOptions';
import { InputTextArea, InputCheckBox, DropdownMenu } from '../eventFormfields/EventFormfields';

function YourCauseForm(props) {
  const { hasValidationErrors, pristine, invalid, prevStep, nextStep} = props;
  console.log('Values within CauseForm', props)
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header
            style={{ marginBottom: 10, color: '#9d9d9d'}}
            sub 
            content='Your Cause' />
          <Form>
            <Form.Field>
              <Label style={{ background: '#fefafa', padding: 10 }}>
                Descript as to why you would like to hold the world's biggest garage sale.
                Otherwise, enter a url link to a video
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non,
                delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ...
              </Label>
              <Field
                name='description'
                autoHeight
                minHeight={{ minHeight: 150 }}
                placeholder='Description or video url link/why?'
                component={InputTextArea}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name="volunteers"
                type="checkbox"
                label="Do you have 6-10 Volunteers?"
                component={InputCheckBox}
                subscription={{ value: true, active: true, error: true, touched: true }} />
            </Form.Field>
            <Form.Field>
              <Field
                name="target_value"
                type="dropdown"
                label="Select your expected Target"
                component={DropdownMenu}
                options={targetOptions}
                subscription={{ value: true, active: true, error: true, touched: true }} />
            </Form.Field>
            <FormSpy subscription={{ values: true }}>
              {({ values }) => (
                 <Button type='button' label="Continue" color='red' disabled={(Object.keys(values).length < 5) ? true : false} onClick={nextStep} />
              )}
            </FormSpy>
            <Button label="Back" primary={false} disabled={invalid || hasValidationErrors || pristine} onClick={prevStep} />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default YourCauseForm;
