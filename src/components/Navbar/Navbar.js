import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-warning ">
        <Link to = "/">
          <a class="navbar-brand" href="#">
            Tamxeed
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/bookcreate">
                <a class="nav-link mr-5" href="#">
                  Book Create<span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/wish">
                <a class="nav-link mr-5" href="#">
                  Wish
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
