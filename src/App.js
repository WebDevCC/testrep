// app/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Providers from './Components/Themes/Provider';
import Navigation from './Components/Navigation';
import Intro from './Components/Intro';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Providers>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
