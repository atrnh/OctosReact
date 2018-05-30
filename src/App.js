import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentCollection from './components/StudentCollection';


class App extends Component {
  render() {
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

    return (
      <div className="App">
        <h1>Student List:</h1>

        <StudentCollection students={studentData}/>

      </div>
    );
  }
}

export default App;
