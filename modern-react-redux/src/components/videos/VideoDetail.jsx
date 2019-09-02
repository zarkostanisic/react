import React from 'react';

class VideoDetail extends React.Component{
  render(){
    const video = this.props.video;

    if(!video){
      return <div>Loading...</div>;
    }

    return(
      <div className="ui segment">
        <h4>{video.snippet.thumbnails.medium.url}</h4>
        <p>{video.snippet.title}</p>
      </div>
    );
  }
}

export default VideoDetail;
