import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js'

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Movie title="The Fellowship of the Ring" hours="2" minutes="58"/>
      <Movie title="The Two Towers" hours="2" minutes="59"/>
      <Movie title="The Return of the King" hours="3" minutes="21" />
    </div>
   
  );
  }
}

export default App;
