import React, { Component, Fragment } from 'react';
import NewStudentForm from './NewStudentForm';

class Student extends Component {
  render() {
    const studentData = this.props;

    return (
      <Fragment>
        <h3>{studentData.name}</h3>
        <ul>
          <li>Email: {studentData.email}</li>
        </ul>
      </Fragment>
    );
  }
}

class StudentCollection extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      students: [
        { name: 'Ada', email: 'ada@ada.co' },
        { name: 'Grace', email: 'grace@ada.co' },
        { name: 'Katherine', email: 'kath@ada.co' }
      ]
    };
  }


  addStudent = student => {
    const students = this.state.students;
    students.push(student);

    this.setState({ students });
  }

  render() {
    const students = this.state.students.map((student, index) => (
      <li>
        <Student
          key={index}
          name={student.name}
          email={student.email}
        />
      </li>
    ));

    return (
      <section>
        <NewStudentForm addStudent={this.addStudent}/>
        <ul>
          {students}
        </ul>
      </section>
    );
  }
}


export default StudentCollection;
