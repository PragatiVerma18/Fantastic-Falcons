import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="navbar-brand">
          <strong>Fantastic Falcons</strong>
        </p>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Videos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
