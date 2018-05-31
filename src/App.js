import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/StudentCollection';


class App extends Component {
  render() {
    // just an array of JS objects...
    const studentData = [
      {
        name: 'Ada',
        email: 'ada@ada.co',
        present: false
      },
      {
        name: 'Grace',
        email: 'grace@ada.co',
        present: false
      }
    ];

    return (
      <div className="App">
        <h1>Student List:</h1>

        <StudentCollection students={studentData}/>

      </div>
    );
  }
}

export default App;
