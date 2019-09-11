import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component{

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render(){
    return(
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, {
  createStream: createStream
})(StreamCreate);
