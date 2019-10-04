import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFootballNews } from '../actions';

class ButtonFootball extends Component{
  render(){
    return(
      <button onClick={this.props.getFootballNews}>Press to see football news</button>
    );
  }
}

const mapDispatchToProps = {
  getFootballNews: getFootballNews
};

export default connect(null, mapDispatchToProps)(ButtonFootball);
