import React, { Component } from 'react';

const imgStyle = {
  height: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple',
  borderradius: '5%'
};

const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
};

class NewsItem extends Component{
  render(){
    let article = this.props.article;
    
    return(
      <article style={articleStyle}>
        <div>
          <h1>{article.title}</h1>
          <img style={imgStyle} src={article.urlToImage} alt=""/>
          <h4>{article.description}</h4>
          <a href={article.url} target="_blank">READ MORE</a> 
        </div> 
      </article>
    );
  }
}

export default NewsItem;
