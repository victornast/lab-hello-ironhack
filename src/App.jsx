import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className="App-header-nav">
            <img src="./images/ironhack-logo.svg" alt="Ironhack Logo" />
            <img src="./images/menu-top.svg" alt="Ironhack Logo" />
          </nav>
          <article className="App-header-intro">
            <h1 className="App-header-intro-title">Say hello to ReactJS</h1>
            <p className="App-header-intro-body">
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer
            </p>
            <a className="App-header-intro-action" href="/">
              Awesome
            </a>
          </article>
        </header>
      </div>
    );
  }
}

export default App;
