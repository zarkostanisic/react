import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar/>
          {/*<ImageList/>*/}
        </div>
      </div>
    );
  }
}

export default App;
