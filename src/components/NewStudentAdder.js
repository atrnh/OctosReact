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

    // Object.assign takes in two objects. It copies properties of
    // the second object into the first object and returns the first
    // object
    //
    // Object.assign(<object>, <object-to-copy>)
    //
    // Object.assign only works with Babel (luckily Babel comes with
    // create-react-app)
    const newStudent = Object.assign({}, this.state);

    // TODO: Validate newStudent before calling the callback!

    callback(newStudent);
    this.setState({ name: '', email: '' });
  }

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
          inputClass={nameText.match(/\w+/) ? "valid" : "invalid"}
        />
        <FormInput
          inputName="email"
          inputText={emailText}
          labelText="Email"
          onInputChange={this.updateWithInput}
          inputClass={emailText.match(/\S+@\S+\.\S+/) ? "valid" : "invalid"}
        />
        <input type="submit" value="Add Student" />
      </form>
    );
  }
}


