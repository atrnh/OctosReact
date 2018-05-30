import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Student from './Student';

// Idea: take as props a list of students
// Each student is a plain JS object
// Turn that into a list of <Student> components
// Render all of them
class StudentCollection extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired
  }

  // Note that props comes as an _argument_ to the
  // constructor, not from this.props.
  constructor(props) {
    super();
    this.state = {
      students: props.students
    }
  }

  // This will be used as a callback so we've got to make
  // it an arrow function!
  markStudentPresent = (index) => {
    console.log(`Marking student ${index} as present`);
    // TODO: mark that student as present

    const updatedStudents = this.state.students;

    updatedStudents[index].present = true;

    this.setState({students: updatedStudents});
  }

  render() {
    const studentComponents = this.state.students.map((student, index) => {
      return <Student key={ index }
        name={ student.name }
        email={ student.email }
        present={ student.present }

        markPresentCallback={this.markStudentPresent}
        studentIndex={index}
        />
    });


    return (
      <div className="student-collection">
        <h1>Hello from student collection</h1>
        {studentComponents}
      </div>
    );
  }
}

export default StudentCollection;
