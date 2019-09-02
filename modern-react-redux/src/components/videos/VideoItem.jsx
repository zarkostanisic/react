import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component{
  render(){
    return(
      <div className="video-item item">
        <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url}/>
        <div className="content">
          <a className="header">{this.props.video.snippet.title}</a>
          <div className="description">{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
