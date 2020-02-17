import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  render() {
    const movieInfo = [
      {
        year: 2001,
        title: 'The Fellowship of the Ring',
        hours: 2,
        minutes: 58,
        linkIMDB: 'http://www.imdb.com/title/tt0120737/',
        img: 'TheFellowshipOfTheRing.jpg',
      },
      {
        year: 2002,
        title: 'The Two Towers',
        hours: 2,
        minutes: 59,
        linkIMDB: 'http://www.imdb.com/title/tt0167261/',
        img: 'TheTwoTowers.jpg',
      },
      {
        year: 2003,
        title: 'The Return of the King',
        hours: 3,
        minutes: 21,
        linkIMDB: 'http://www.imdb.com/title/tt0167260/',
        img: 'TheReturnOfTheKing.jpg',
      },
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to The Lord of the Rings Fans Page</h2>
        </div>
        <Movie movieInfo={movieInfo}></Movie>
      </div>
    );
  }
}

export default App;