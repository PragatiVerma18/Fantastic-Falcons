import React from "react";
import { Link } from "react-router-dom";
import ThemeBox from "../ThemeBox";
import { GlobalStyles } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";
import { useTheme } from "./useTheme";
import { ThemeProvider } from "styled-components";

function Navbar() {
  const [theme, setMode] = useTheme();

  const themeMode = () => {
    switch (theme) {
      case "light":
        return lightTheme;
      case "dark":
        return darkTheme;
      default:
        return darkTheme;
    }
  };
  return (
    <ThemeProvider theme={themeMode()}>
      <>
        <GlobalStyles />
        <div>
          <nav
            // className="navbar navbar-expand-lg navbar-light bg-light"
            className={
              "navbar navbar-expand-lg " +
              (theme === "light"
                ? "navbar-light bg-light"
                : "navbar-dark bg-dark")
            }
          >
            <p className="navbar-brand">
              <strong>Fantastic Falcons</strong>
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/videos">
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
            <ThemeBox setMode={setMode} />
          </nav>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
