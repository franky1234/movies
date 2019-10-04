import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { Search } from '../container/index';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Movies</span>
      </header>
      <section>
        <Search />
      </section>
    </div>
  );
}

export default App;
