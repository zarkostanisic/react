import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetail extends Component{
  render(){
    const song = this.props.song;
    if(song){
      return(
        <div>
          <h3>Details for:</h3>
          <p>
            {song.title}
            <br/>
            {song.duration}
          </p>
        </div>
      );
    }

    return(
      <div>Select a song</div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);
