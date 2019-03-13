import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component{
  render() {
    return(
      <ul>
        <li>Basic HTML elements such as lists, toggles...</li>
        <li>E-commerce app with a shopping cart</li>
      </ul>
    )
  } 
}

class App extends Component {
  render() {
    return (
      <List/>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
