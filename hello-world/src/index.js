import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App';

const person = {
    personName: "Carl Sagan",
    personAge: 62,
    favorites: [
      "Birds",
      "Tigers",
      "Dinosaurs count!"
    ]
  }

ReactDOM.render(<Hello name={person.personName} age={person.personAge} animals={person.favorites}/>, document.getElementById('root'));
