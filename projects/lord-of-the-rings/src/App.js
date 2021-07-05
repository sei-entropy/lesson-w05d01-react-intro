import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() {
      const Movies =[
        {
          title:"The Fellowship of the Ring" ,
          hours: 2 ,
          minutes:58 ,
        },
        {
          title:"The Two Towers" ,
          hours: 2,
          minutes: 59 ,
        },
        {
          title:"The Return of the King" ,
          hours: 3 ,
          minutes: 21 ,
        },
      ]

      const allMovie = Movies.map(movie=>{
        return <Movie title={movie.title} hours={movie.hours} minutes= {movie.minutes} />
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {allMovie}
      </div>
    );
  }
}

export default App;