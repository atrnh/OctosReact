import React, { Component } from 'react';

class Student extends Component {
  render() {
    const studentName = this.props.name;
    const studentEmail = this.props.email;

    return (
      <section>
        <ul>
          <li>Name: { studentName } </li>
          <li>Email: { studentEmail }</li>
          <li>Grade: { this.props.grade }</li>
        </ul>
      </section>
    );
  }
}

export default Student;
