import logo from './logo.svg';
import './App.css';

import React from 'react';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          iNET SYSTEMS INC.
        </a>
        <Login />
        <Signup />
      </header>
    </div>
  );
}

export default App;
