import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './theMovie.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> welcom to React </h1>
      </header>
      <body> 
      <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Movie title="The Fellowship of the Ring" hours="2" minutes="58"></Movie>
        <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
        <Movie title="The Return of the King" hours="3" minutes="21"></Movie>
      </body>
    </div>
  );
}

export default App;
