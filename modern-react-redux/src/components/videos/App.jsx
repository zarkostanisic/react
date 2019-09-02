import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from './api/youtube';

class App extends React.Component{
  state = {
    videos: [],
    selectedVideo: null
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({videos: response.data.items});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render(){
    const selectedVideo = this.state.selectedVideo;

    return <div className="ui container">
      <SearchBar onSubmit={this.onSearchSubmit}/>
      {selectedVideo ? <VideoDetail video={selectedVideo}/> : ''}
      <VideoList videos={this.state.videos}
        onVideoSelect={this.onVideoSelect}
      />
    </div>;
  }
}

export default App;
