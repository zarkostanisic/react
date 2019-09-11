import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends Component{
  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchStream(id);
  }

  render(){

    if(!this.props.stream){
      return <div>Loading...</div>;
    }

    const {title, description} = this.props.stream;

    return(
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    stream: state.streams[id]
  }
}

export default connect(mapStateToProps, {
  fetchStream: fetchStream
})(StreamShow);
