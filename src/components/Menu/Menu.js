import React, { Component } from "react";

export class Menu extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="nav ">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product Management
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
