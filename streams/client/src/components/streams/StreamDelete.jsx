import React, {Component} from 'react';
import Modal from '../Modal';

class StreamDelete extends Component{
  render(){
    const actions = (
      <React.Fragment>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );


    return(
      <div>
        <Modal title="Delete Stream" content="Are you sure you want to delete this stream?" actions={actions}/>
      </div>
    );
  }
}

export default StreamDelete;
