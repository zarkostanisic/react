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
    const text = season === 'summer' ? 'Lets hit the beach' : 'Brurr, it is chilly';
    const icon = season === 'summer' ? 'sun' : 'snowflake';

    return(
      <div>
        <i className={icon + ' icon'}/>
        <h1>{text}</h1>
        <i className={icon + ' icon'}/>
      </div>
    );
  }
}

export default SeasonDisplay;
