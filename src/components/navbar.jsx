import React, { Component } from "react";
import "./navbar.css";

class CustomNavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                Map <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Travel Risk
              </a>
            </li>
            <li
              className="nav-item dropdown"
              style={{ color: "white", backgroundColor: "#00aef9" }}
            >
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Miscellaneous
              </a>
              <div
                className="dropdown-menu{show}"
                aria-labelledby="navbarDropdown"
                style={{ position: "absolute" }}
              >
                <a
                  className="dropdown-item"
                  href="www.google.com"
                  style={{ color: "white", backgroundColor: "#00aef9" }}
                >
                  Action
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "white", backgroundColor: "#00aef9" }}
                >
                  Another action
                </a>
                <div
                  className="dropdown-divider"
                  id="something"
                  style={{
                    borderColor: "blue",
                    backgroundColor: "#000000"*,
                  }}
                ></div>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{ color: "white", backgroundColor: "#00aef9" }}
                >
                  Something else here
                </a>
              </div>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default CustomNavBar;
