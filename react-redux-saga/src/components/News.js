import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsItem from './NewsItem';

class News extends Component{
  render(){
    if(this.props.articles.length > 0){
      return(
        this.props.articles.map((article, key) => 
          (
            <NewsItem key={key} article={article}/>
          )
        )
      );
    }
    
    return null;
  };
};

const mapStateToProps = (state) => ({
  articles: state.articles.news
});

export default connect(mapStateToProps, null)(News);
