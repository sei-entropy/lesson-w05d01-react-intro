import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Lord of the Rings </h2>
        </div>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
        <img src={process.env.PUBLIC_URL + '/1.jpg'} /> 
       < a href={'https://www.imdb.com/title/tt0120737/'}>

        <Movie title="The Fellowship of the Ring" hours="2" minutes="58"></Movie> </a>

        <img src={process.env.PUBLIC_URL + '/2.jpg'} /> 
        < a href={'https://www.imdb.com/title/tt0167261/'}>
        <Movie title="The Two Towers" hours="2" minutes="59"></Movie> </a>


        <img src={process.env.PUBLIC_URL + '/3.jpg'} /> 
        < a href={'https://www.imdb.com/title/tt0167260/'}>
        <Movie title="The Return of the King" hours="3" minutes="21"></Movie> </a>

      </div>
    );
  }
}

export default App;
