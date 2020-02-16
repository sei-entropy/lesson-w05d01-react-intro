import React from 'react';
import logo from './logo.svg';
import './App.css';
import Film from './Films.js';

export default class App extends React.Component {
  render() {
      const Films =[
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

      const allFilm = Films.map(film=>{
        return <Film title={film.title} hours={film.hours} minutes= {film.minutes} />
      })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to React</h3>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {allFilm}
      </div>
    );
  }
}

