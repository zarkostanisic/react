import React from 'react';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        lat: null,
        errorMessage: ''
      }

      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          this.setState({lat: position.coords.latitude});
        },
        (err) => {
          this.setState({errorMessage: err.message});
        }
      );
  }

  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }else if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading</div>
  }
}

export default App;
