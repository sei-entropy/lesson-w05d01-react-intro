import React from 'react';


export default class Author extends React.Component {

    render(){
        return(
            <p>Written by {this.props.author}</p>
        )
    }
}