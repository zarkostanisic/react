import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends Component{
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    const posts = this.props.posts;

    console.log(posts);
    return(
      <div>PostList</div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  fetchPosts: fetchPosts
})(PostList);
