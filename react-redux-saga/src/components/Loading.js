import React, { Component } from 'react';
import { connect } from 'react-redux';
import img from '../loading_spinner.gif';

class Loading extends Component{
  render(){
    if(this.props.loading){
      return(
        <div style={{ textAlign: 'center'}}>
          <img src={img} alt="loading"/>
          <h1>Loading</h1>
        </div>
      );
    }
    
    return null;
  }
}

const mapStateToProps = (state) => ({
  loading: state.articles.loading
});

export default connect(mapStateToProps, null)(Loading);
