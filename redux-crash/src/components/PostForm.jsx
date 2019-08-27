import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class PostForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render(){
    return(
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
           <div>
              <label>Title:</label>
              <input type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
           </div>
           <br/>
           <div>
              <label>Body</label>
              <textarea name="body" onChange={this.onChange} defaultValue={this.state.body}></textarea>
           </div>
           <br/>
           <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapDispatchToProps = (dispatch) => ({
      createPost: post => dispatch(createPost(post))
});

export default connect(null, mapDispatchToProps)(PostForm);
