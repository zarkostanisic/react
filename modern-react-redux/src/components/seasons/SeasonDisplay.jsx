import React from 'react';

const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter';
  }else{
    return lat > 0 ? 'winter' : 'summer';
  }
}

class SeasonDisplay extends React.Component {
  render(){
    const season = getSeason(this.props.lat, new Date().getMonth());

    return(
      <div>Latitude: {season}</div>
    );
  }
}

export default SeasonDisplay;
