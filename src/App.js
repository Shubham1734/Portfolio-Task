// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      {/* <Projects /> */}
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
