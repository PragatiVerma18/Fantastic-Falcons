import React from "react";
import "./App.css";
import Team from "./Components/Team/Team";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img
        className="logo"
        src="https://user-images.githubusercontent.com/42115530/95915203-71448880-0dc4-11eb-875d-f47ea72f886a.png"
        alt="logo"
      />
      {/* https://user-images.githubusercontent.com/42115530/95913615-2295ef00-0dc2-11eb-8176-8d9783cf8b65.png */}
      <Team />
    </div>
  );
}

export default App;
