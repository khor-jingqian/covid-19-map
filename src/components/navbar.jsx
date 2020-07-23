import React, { Component } from "react";
import "./navbar.css";

class CustomNavBar extends Component {
  state = {};

  componentDidMount() {
    this.handleAsync();
  }

  async handleAsync() {
    console.log("handleAsync clicked!");
    const res = await fetch("http://localhost:3001/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const txt = await res.json;
    console.log("fetch sent");
    console.log(txt);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a
          className="navbar-brand"
          href="#"
          // onClick={this.handleAsync}
        >
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
              <a className="nav-link" href="#">
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
              style={{ backgroundColor: "#00aef9" }}
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
                  className="dropdown-divider dropdown-divider-blue"
                  id="something"
                  style={{
                    color: "#00aef9",
                    borderColor: "#00aef9",
                    backgroundColor: "#ffffff",
                    borderTop: "10px double #00aef9",
                    margin: "0px",
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
          </ul>
        </div>
      </nav>
    );
  }
}

export default CustomNavBar;
