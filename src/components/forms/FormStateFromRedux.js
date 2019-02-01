import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from "../../redux/reducers/reduxFormReducer";

const FormStateFromRedux = ({ state }) => (
  <pre>{JSON.stringify(state, 0, 2)}</pre>
)

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)
