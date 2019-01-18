import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import { connect } from 'react-redux'
import { simpleAction } from './actions/simpleAction'

class App extends Component {
  
simpleAction = (event) => {
  this.props.simpleAction();
 }
  render() {
    return (
      <div className="App">
      <button onClick={this.simpleAction}> test </button>
      <pre>
      {
        JSON.stringify(this.props)
      }
      </pre>
      <Welcome />
     </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
 })


const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
