import React from 'react';

import VideoItem from './VideoItem'

class VideoList extends React.Component{
  render(){
    const renderedList = this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect}/>
    });

    return (
      <div>
        {/*I have {this.props.videos.length} videos.*/}
        <div className="ui list">
          {renderedList}
        </div>
      </div>
    )
  }
}

export default VideoList;
