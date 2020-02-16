import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render() {
    const post = {
      title: "Dinosaurs are awesome",
      authors: ["Stealthy Stegosaurus", 
                "Tiny T-Rex", 
                " Ivory Iguanodon"],
      body: "Something about something...",
      comments: [
        "First",
        "You suck! Get a real job!",
        "Have a nice day! :)",
        "Testing"
      ],
    };

    return <div>
      <Post title={post.title}
                  authors={post.authors}
                  body={post.body}
                  comments={post.comments} />
    </div>
  }
}