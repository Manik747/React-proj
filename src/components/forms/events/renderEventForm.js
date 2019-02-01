import React from 'react';
import { FormSpy } from "react-final-form";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HostDetailsForm from "./hostDetailsForm";
import CreateCauseForm from "./yourCauseForm";
import CommunityDetailsForm from "./yourCommunityForm";
import ConfirmDetailsForm from "./Confirm";

const CollectUserDetailsForm = (props) => {
  const { onSubmit, handleSubmit, mutators: { push, pop }, values, pristine, submitting, invalid,form, hasSubmitErrors, submitErrors, nextStep, prevStep, page, ...rest } = props;
  console.log("hasValidationErrors", props);
  //  console.log("hasValidationErrors", invalid, pristine, submitting);
  return (
    // <form onSubmit={handleSubmit}>
    <div>
      <CSSTransition key={'page=0'} in={true} appear timeout={4500} classNames="fade">
        <HostDetailsForm form={form} onSubmit={onSubmit} handleSubmit={handleSubmit} values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} {...rest} />

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
          <h3 style={{ color: 'red', margin: 20, textAlign: 'center' }}>For Debugging Purposes Only</h3>
          <hr />
          <p style={{ color: 'teal', padding: '15px 20px 20px 200px' }}>{JSON.stringify(values, undefined, 2)}</p>
        </pre>}
      </FormSpy>
    </div>
    // </form>
  );
}

export default CollectUserDetailsForm;
