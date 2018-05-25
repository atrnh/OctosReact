import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render() {
    // we can render an array of JSX if we want.
    // for example, adding {someStudents} below, this will work
    const someStudents = [
    ( <Student key='f' name='new student' email='f' grade='g' /> ),
    ( <Student key='f' name='another student' email='h' grade='i' /> )];

    // just an array of JS objects...
    const studentData = [
      {
        name: 'Ada',
        email: 'ada@ada.co'
      },
      {
        name: 'Grace',
        email: 'grace@ada.co'
      }
    ];

    // an unfinished foreach loop... this loop does nothing, but shows us we can use a forEach loop in all of the ways we're familiar with :)
    studentData.forEach( (student) => {
      student.name;
      student.email;
    } );

    // we can make an array of JSX via iterating through a set of data
    const studentComponents = studentData.map((student, index) => {
      return <Student key={ index } name={ student.name } email={ student.email } />
    });

    return (
      <div className="App">
        <h1>Student List:</h1>

        { studentComponents }

      </div>
    );
  }
}

export default App;
