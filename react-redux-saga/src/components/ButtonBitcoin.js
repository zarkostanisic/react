import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBitcoinNews } from '../actions';

class ButtonBitcoin extends Component{
  render(){
    return(
      <button onClick={this.props.getBitcoinNews}>Press to see bitcoin news</button>
    );
  }
}

const mapDispatchToProps = {
  getBitcoinNews: getBitcoinNews
};

export default connect(null, mapDispatchToProps)(ButtonBitcoin);
