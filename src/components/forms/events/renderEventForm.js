import React, { Component } from 'react';
import { Field, FormSpy } from "react-final-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
 Grid,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label,
 Input
} from 'semantic-ui-react';

import HostDetailsForm from "./hostDetailsForm";
import CreateCauseForm from "./yourCauseForm";
import CommunityDetailsForm from "./yourCommunityForm";
import ConfirmDetailsForm from "./Confirm";

// import '../../../App.css';
// import FormStateToRedux from "../FormStateToRedux";
// import RenderCount from "../common";
// import InputText from "../forms/InputText";
// import CreateCauseForm from "./UserCauseForm";
// import CommunityDetailsForm from "./communityDetailsForm";
// import ConfirmDetailsForm from "./Confirm";

// import FadeTransition from "../CSSTransitions/fadeTransition";
// import SlideTransition from "../CSSTransitions/slideTransition";

const CollectUserDetailsForm = (props) => {
 const { handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, page } = props;
 console.log("hasValidationErrors", invalid, pristine, submitting);
 return (
   <div>
     <CSSTransition key={'page=0'} in={true} appear timeout={4500} classNames="fade">
     <HostDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
     </CSSTransition>
    
     <TransitionGroup className='form-container'>
        {
            (page === 1 &&
              <CSSTransition key={page} in={page === 1} appear={page === 1} timeout={500} classNames="slide">
                <CreateCauseForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
              </CSSTransition>)
          || (page === 2 &&
              <CSSTransition key={page} in={page === 2} appear={page === 2} timeout={500} classNames="slide">
                <CommunityDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
              </CSSTransition>)
          || (page === 3 &&
              <CSSTransition key={page} in={page === 3} appear={page === 3} timeout={500} classNames="slideIn">
                <ConfirmDetailsForm form='userForm' handleSubmit={handleSubmit} values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
              </CSSTransition>)
          || null

        }
     </TransitionGroup>
     <FormSpy subscription={{ values: true }}>
       {({ values }) => <pre>
         <h3 style={{ color: 'red', margin: 20, textAlign: 'center'}}>For Debugging Purposes Only</h3>
            <hr />
            <p style={{color: 'teal',padding: '15px 20px 20px 200px'}}>{JSON.stringify(values, undefined, 2)}</p>
         </pre>}
     </FormSpy>
   </div>
   );
}

export default CollectUserDetailsForm;
