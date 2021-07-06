import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie.js';

function App() {


  let Movies =[
    { title:"The Fellowship of the Ring", hours:2, minutes:85 ,},
    { title:"The Two Towers", hours:2, minutes:59 ,},
    { title:"The Return of the King", hours:3, minutes:21 ,},
  ];


  const allMovies = Movies.map( function(key,index) {
    return (
      <Movie  title = { Movies[index].title }  hours = {Movies[index].hours}  minutes = {Movies[index].minutes } />
    );
   });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
       </p>
      </header>
       

       <div>
         { Movies = allMovies }
       </div>


        {/* <Movie title="The Fellowship of the Ring" hours="2" minutes="58"></Movie>
        <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
        <Movie title="The Return of the King" hours="3" minutes="21"></Movie> */}


    </div>
  );
}

export default App;
