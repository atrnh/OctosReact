import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './NewStudentAdder.css';

export default class NewStudentAdder extends Component {
  static propTypes = {
    onSubmitCallback: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = { name: '', email: ''};
  }

  updateWithInput = input => {
    const newState = {};

    // Dynamically get the property and assign it to input.value
    // We're going to trust our developer to always set the input.name
    // to the name of the property they would like to fill using form data
    newState[input.name] = input.value;

    this.setState(newState);
  };

  handleOnSubmit = (event, callback) => {
    event.preventDefault();

    // Copy this.state
    const newStudent = Object.assign({}, this.state);

    // TODO: Validate newStudent before calling the callback!

    callback(newStudent);
    this.setState({ name: '', email: '' });
  }

  // This can be static because we don't need to access this 
  static isInputValid = (pattern, str) => str.match(pattern);

  render() {
    const props = this.props;
    const nameText = this.state.name;
    const emailText = this.state.email;

    return (
      <form onSubmit={e => this.handleOnSubmit(e, props.onSubmitCallback)}>
        <FormInput
          inputName="name"
          inputText={nameText}
          labelText="Name"
          onInputChange={this.updateWithInput}
          inputClass={(
            // Ternary expression
            NewStudentAdder.isInputValid(/\w+/, nameText) ? "valid"
            : "invalid"
          )}
        />
        <FormInput
          inputName="email"
          inputText={emailText}
          labelText="Email"
          onInputChange={this.updateWithInput}
          inputClass={(
            NewStudentAdder.isInputValid(/\S+@\S+\.\S+/, emailText) ? "valid"
            : "invalid"
          )}
        />
        <input type="submit" value="Add Student" />
      </form>
    );
  }
}


