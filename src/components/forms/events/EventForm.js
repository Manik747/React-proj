import React, { Component } from 'react';
import { Form as FinalForm } from "react-final-form";
import arrayMutators from "final-form-arrays";

import createDecorator from "final-form-focus";

import RenderEventForm from '././renderEventForm';
import isUri from 'valid-url';
import validate from '../validates';
import { api } from "../../../api/init";
import FormStateFromRedux from "../FormStateFromRedux";


var validUrl = require('valid-url');


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}

const focusOnError = createDecorator();
class CreateEventForm extends Component {
  state = { page: 0 }
  nextStep = () => {
    this.setState({ page: this.state.page + 1 });
    console.log('Page No:', this.state.page)
  }
  prevStep = () => {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
  }
  // changeNewSocial = event => {
  //   this.setState({ newSocials: event.target.value })

  // }

  // createNewSocial = event => {
  //   event.preventDefault()
  //   if (validUrl.isWebUri(this.state.newSocials)) {
  //     console.log('Looks like an URI');
  //     const socials = [...this.state.socials, this.state.newSocials]
  //     this.setState({ socials, newSocials: '' })
  //   } else {
  //     alert("Please enter a valid URL.");
  //     console.log('Not a URI');
  //   }

  // }

  handleFormSubmit = async values => { 
    // const location = [values.suburb, values.zipCode, values.country];
    const eventData = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      socials: values.socials.map(social => social.name),
      organisation: values.organisation,
      description: values.description,
      volunteers: values.volunteers,
      target_value: values.target_value,
      best_time: values.best_time,
      local_council_relationship: values.local_council_relationship,
      local_council_details: values.local_council_details,
      key_influencers: [
        ...values.key_influencers.split(",").map(s => s.trim())
      ],
      location: [values.suburb, values.zipCode, values.country]
    };

    try{
         console.log(JSON.stringify(eventData));
         const response = await api.post("/expression-of-interest", eventData);

         const eventConfirmation = response.data;

         showResults(eventConfirmation);
       }catch(error){
      console.log('error submitting form', error)
    }
    
  }

  render() {
    return (
      <div>
        <FinalForm
          onSubmit={this.handleFormSubmit}
          mutators={{...arrayMutators}}
          decorators={[focusOnError]}
          validate={validate}
          validateOnBlur={true}
          initialValues={{}}
          subscription={{ invalid: true, submitting: true, pristine: true, hasValidationErrors: true }}
          page={this.state.page}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          render={RenderEventForm}
          />
        <FormStateFromRedux form="userForm" />
      </div>
    )
  }
}

export default CreateEventForm;



















  // validateUrl = () => {
  //   if (validUrl.isWebUri(this.state.newSocials)){
  //     console.log('Looks like an URI');
  // } else {
  //   alert("Please enter a valid URL.");
  //     console.log('Not a URI');
  // }
  // } // is_url = (str) =>{
  // RegExp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  //       if (RegExp.test(str))
  //       {
  //         alert("Please enter a valid URL.");
  //       return false;
  //     } else {
  //       return true;
  //   }
  // }
