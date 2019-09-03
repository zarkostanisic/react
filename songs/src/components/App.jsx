import React from 'react';
import {selectSong} from '../actions/index';
import SongList from './SongList';

class App extends React.Component{
  render(){
    return(
      <div>
        App
        <SongList/>
      </div>
    );
  }
}

export default App;
