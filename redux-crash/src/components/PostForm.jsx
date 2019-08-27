import React, {Component} from 'react'

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

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post )
    }).then((response) => response.json())
    .then((data) => console.log(data));
  }
}

export default PostForm;
