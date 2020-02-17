import React from 'react';
import Comment from './Comment';
import Author from './Author';

export default class Post extends React.Component {
  render() {
    // const allComments = [
    //   <Comment message={this.props.comments[0]} />,
    //   <Comment message={this.props.comments[1]} />,
    //   <Comment message={this.props.comments[2]} />,
    // ];

    const allComments = this.props.comments.map(function(message, index) {
      return <Comment key={index} message={message} />;
    });

    const allAuthors = this.props.authors.map(function(author, index){
        return <Author key={index} author={author} />;
    })

    return <div>
      <h1>{this.props.title}</h1>
      {allAuthors}
      <p>{this.props.body}</p>
      <h2>Comments:</h2>
      {allComments}
    </div>;
  }
}