import React, { Component } from 'react';
import './App.css';
import StudentCollection from './components/Student';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Student List:</h1>
        <StudentCollection />
      </div>
    );
  }
}

export default App;
