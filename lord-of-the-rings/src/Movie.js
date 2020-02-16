import React, { Component } from 'react';

class Movie extends Component {

    render() {
        const allMovieInfo = this.props.movieInfo.map((item, i) =>
            <ul key={i}>
                <a href={item.linkIMDB} target="_blank" rel="noopener noreferrer">
                    {/* {process.env.PUBLIC_URL + item.img} */}
                    <img src={item.img} alt={item.title} width="350" height="495" />
                    <h1>The Lord of the Rings: {item.title} ({item.year})</h1>
                </a>
                <p>{item.hours}h {item.minutes}min</p>
                <hr width="50%" />
            </ul>
        )
        return (
            <div>
                {allMovieInfo}
            </div>
        );
    }
}

export default Movie;