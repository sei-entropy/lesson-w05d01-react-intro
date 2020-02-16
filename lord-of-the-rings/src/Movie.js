import React, {Component} from 'react';

// export the component
export default class Movie extends Component {
    // render the passed props from App component (title, hours, minutes)
    render(){
        return(
            <div>
                <h1>The Lord of the Rings: {this.props.title}</h1>
                <p>{this.props.hours}h {this.props.minutes}min</p>     
            </div>
        );
    }
}