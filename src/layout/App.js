import React from 'react';
import logo from '../logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Movies</span>
    </header>
      <section className="App-section-movie">
      </section>
    </div>
  );
}

export default App;
