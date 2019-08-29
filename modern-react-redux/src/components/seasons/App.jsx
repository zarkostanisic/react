import React from 'react';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        lat: null,
        lon: null
      }

      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({lat: position.coords.latitude});
          this.setState({lon: position.coords.longitude});
        },
        (err) => console.log(err)
      );
  }

  render(){
    return(
      <div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lon}</div>
        <SeasonDisplay/>
      </div>
    );
  }
}

export default App;
