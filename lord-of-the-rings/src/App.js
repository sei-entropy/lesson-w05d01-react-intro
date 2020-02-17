import React from 'react';

import Movie from './Movie.js';

export default class App extends React.Component {

  render() {

    const movies=[
      {
       title:"The Fellowship of the Ring",
       hours:2 ,
       minutes:58,
    },
    {
      title:"The Two Towers",
       hours:2 ,
       minutes:59,
    },
    {
      title:"The Fellowship of the Ring",
       hours:3 ,
       minutes:21,
    },
  ]
     const all =movies.map(mov=>{

      return <Movie title={mov.title} hours={mov.hours}minutes={mov.minutes} />

     })
     return all;
  }
}



