import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './components/Student';

class App extends Component {
  render() {
    const myName = "Kari";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Student />

        <p>{ myName }</p>
        {/*This is a comment example*/}
      </div>
    );
  }
}

export default App;
