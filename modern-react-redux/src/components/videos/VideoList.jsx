import React from 'react';

import VideoItem from './VideoItem'

class VideoList extends React.Component{
  render(){
    const renderedList = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video}/>
    });

    return (
      <div className="ui list">
        {renderedList}
      </div>
    )
  }
}

export default VideoList;
