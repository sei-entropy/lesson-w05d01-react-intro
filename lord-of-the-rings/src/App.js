// imports
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


export default class App extends Component{
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <p className="App-intro">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* Passing information via props to Movie component*/}
          <Movie title="The Fellowship of the Ring" hours="2" minutes="58"></Movie>
          <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
          <Movie title="The Return of the King" hours="3" minutes="21"></Movie>    
        </div>
    );
  }
}