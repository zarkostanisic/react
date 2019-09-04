import React from 'react';
import {selectSong} from '../actions/index';
import SongList from './SongList';

class App extends React.Component{
  render(){
    return(
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
