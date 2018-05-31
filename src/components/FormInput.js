import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class FormInput extends Component {
  static propTypes = {
    inputName: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    inputText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    inputClass: PropTypes.string
  }

  handleInputChange = (event, callback) => {
    event.preventDefault();

    callback(event.target);
  }

  render() {
    const props = this.props;

    return (
      <Fragment>
        <label htmlFor={props.inputName}>{props.labelText}</label>
        <input
          name={props.inputName}
          value={props.inputText}
          onChange={e => this.handleInputChange(e, props.onInputChange)}
          className={props.inputClass}
        />
      </Fragment>
    );
  }
}
