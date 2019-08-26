import React, {Component} from 'react'
import  uuidv1 from 'uuid';

// Redux
import {connect} from 'react-redux'
import {addArticle} from '../actions/index'

// Redux
function mapDispatchToProps(dispatch){
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}

class ConnectedForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const {title} = this.state;
    const id = uuidv1();
    // Redux
    this.props.addArticle({title, id});

    this.setState({title: ''});
  }

  render(){
    const {title} = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

// Redux
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
