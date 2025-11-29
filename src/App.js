import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://assets.cdn.dicoding.com/original/commons/certificate_logo.png" className="App-logo" alt="Dicoding Logo" />
          <h1 className="App-title">
            <a 
              href="https://www.dicoding.com/users/rprayatman/academies" 
              target="_blank" 
              rel="noopener noreferrer"
              className="App-name-link"
            >
              Rizky Prayatman
            </a>
          </h1>
        </header>
        <p className="App-intro">
          Click my name to view my Dicoding profile and academies.
        </p>
      </div>
    );
  }
}

export default App;
