import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component{
  render(){
    const video = this.props.video;

    return(
      <div className="video-item item" onClick={() => this.props.onVideoSelect(video)}>
        <img className="ui image" src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
          <a className="header">{video.snippet.title}</a>
          <div className="description">{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
