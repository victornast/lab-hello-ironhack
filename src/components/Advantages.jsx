import React, { Component } from 'react';

import './Advantages.css';

class Advantages extends Component {
  render() {
    return (
      <div className="Advantages">
        <ul className="Advantages-list">
          <li className="Advantages-list-item">
            <img
              className="Advantages-list-item__icon"
              src="./images/icon1.png"
              alt="Declarative"
            />
            <h2 className="Advantages-list-item__title">Declarative</h2>
            <p className="Advantages-list-item__text">
              React makes it painless to create interactive UIs.
            </p>
          </li>
          <li className="Advantages-list-item">
            <img
              className="Advantages-list-item__icon"
              src="./images/icon2.png"
              alt="Components"
            />
            <h2 className="Advantages-list-item__title">Components</h2>
            <p className="Advantages-list-item__text">
              Build encapsulated components that manage their state.
            </p>
          </li>
          <li className="Advantages-list-item">
            <img
              className="Advantages-list-item__icon"
              src="./images/icon3.png"
              alt="Single-Way"
            />
            <h2 className="Advantages-list-item__title">Single-Way</h2>
            <p className="Advantages-list-item__text">
              A set of immutable values are passed to the components.
            </p>
          </li>
          <li className="Advantages-list-item">
            <img
              className="Advantages-list-item__icon"
              src="./images/icon4.png"
              alt="JSX"
            />
            <h2 className="Advantages-list-item__title">JSX</h2>
            <p className="Advantages-list-item__text">
              Statically-typed, designed to run on modern browsers.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Advantages;
