import React from 'react'

export default class Movie extends React.Component{

    render(){
        return <div>
            <h1>The Lord of the Rings: {this.props.title}</h1>
            <p>{this.props.hours}h {this.props.minutes}min</p>
        </div>
    }

}