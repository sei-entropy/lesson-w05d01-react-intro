import React from 'react';
import Movie from './Movie.js';



class App extends React.Component{

  render() {
    return (  <div>
    <Movie title="The Fellowship of the Ring" hours="2" minutes="58"/>
    <Movie title="The Two Towers" hours="2" minutes="59"></Movie>
     <Movie title="The Return of the King" hours="3" minutes="21"></Movie>
     


    </div>  )
    }
}


export default App;
