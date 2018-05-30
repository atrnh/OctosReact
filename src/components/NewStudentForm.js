import React, { Fragment, Component } from 'react';

class FormInput extends Component {
  handleInputChange = event => {
    this.props.onInputChange(event.target);
  }

  render() {
    const inputName = this.props.inputName;
    const inputText = this.props.inputText;
    const labelText = this.props.labelText;
    const inputClass = this.props.inputClass;

    return (
      <Fragment>
        <label htmlFor={inputName}>{labelText}</label>
        <input
          name={inputName}
          value={inputText}
          onChange={this.handleInputChange}
          className={inputClass}
        />
      </Fragment>
    );
  }
}

class NewStudentForm extends Component {
  constructor() {
    super();

    this.state = { name: '', email: '' };
  }


  handleInputChange = inputData => {
    const newState = {};
    newState[inputData.name] = inputData.value;

    this.setState(newState);
  };


  handleOnSubmit = (event, callback) => {
    event.preventDefault();

    // Pass new information to the callback
    const newStudent = Object.assign({}, this.state);
    callback(newStudent);

    this.setState({ name: '', email: '' });
  };


  isInputValid = (pattern, str) => str.match(pattern);


  render() {
    const nameText = this.state.name;
    const emailText = this.state.email;

    return (
      <form onSubmit={e => this.handleOnSubmit(e, this.props.addStudent)}>
        <FormInput
          inputName="name"
          inputText={nameText}
          labelText="Name:"
          onInputChange={this.handleInputChange}
          inputClass={this.isInputValid(/\w+/, nameText) ? "valid" : "invalid"}
        />
        <FormInput
          inputName="email"
          inputText={this.state.email}
          labelText="Email:"
          onInputChange={this.handleInputChange}
          inputClass={(
            this.isInputValid(/\S+@\S+\.\S+/, emailText) ?
            "valid" :
            "invalid"
          )}
        />
        <input
          type="submit"
          value="Add Student"
        />
      </form>
    );
  }
}


export default NewStudentForm;
