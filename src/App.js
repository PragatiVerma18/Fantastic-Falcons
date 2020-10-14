import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Blogs from "./Components/Blogs/Blogs";
import Videos from "./Components/Videos/Videos";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
