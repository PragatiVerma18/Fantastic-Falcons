import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import Videos from "./Components/Videos/Videos";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import ThemeBox from "./Components/ThemeBox";
import { GlobalStyles } from "./utils/GlobalStyle";
import { lightTheme, darkTheme } from "./utils/Themes";
import { useTheme } from "./utils/useTheme";

const App = () => {
  const [theme, setMode, mountedComponent] = useTheme();

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

  if (!mountedComponent) return <div />;
  console.log(theme);
  return (
    <ThemeProvider theme={themeMode()}>
      <>
        <GlobalStyles />
        <Router>
          <Navbar />
          <ThemeBox setMode={setMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/videos" component={Videos} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
