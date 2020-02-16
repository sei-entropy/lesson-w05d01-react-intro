import React from 'react';

export default class Film extends React.Component {
  render() {
    return (
      <div>
        <h2>The Lord of the Rings: {this.props.title}</h2>
        <p>{this.props.hours}h {this.props.minutes}min</p>
      </div>
    );
  }
}



 