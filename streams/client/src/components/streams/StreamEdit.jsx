import React, {Component} from 'react';

class StreamEdit extends Component{
  render(){
    console.log(this.props.match.params.id);
    return(
      <div>StreamEdit</div>
    );
  }
}

export default StreamEdit;
