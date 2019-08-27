import React, {Component} from 'react';

class Posts extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => this.setState({posts: data}));
  }

  render(){
    const postItems = <ul>
      {this.state.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>;

    return(
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;
