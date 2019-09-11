import React from 'react';

class VideoDetail extends React.Component{
  render(){
    const video = this.props.video;

    if(!video){
      return <div>Loading...</div>;
    }
    
    const videoSrc = 'https://www.youtube.com/embed/' + video.id.videoId;

    return(
      <div>
        <div className="ui embed">
          <iframe title="video player" width="420" height="315" src={videoSrc}></iframe>
        </div>
        <div className="ui segment">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
