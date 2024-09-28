// app/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Intro from "./Components/Intro";
import AboutUs from "./Components/AboutUs";
import Reasons from "./Components/Reasons";

function App() {
  return (

      <Router>
        <div className="background-animation">
          <Navigation />
          <Intro />
          <AboutUs />
          <Reasons />
        </div>
      </Router>

  );
}

export default App;
