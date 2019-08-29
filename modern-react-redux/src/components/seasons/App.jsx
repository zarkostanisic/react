import React from 'react';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    
    return(
      <div>
        <div>Latitude:</div>
        <SeasonDisplay/>
      </div>
    );
  }
}

export default App;
