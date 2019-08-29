import React from 'react';
import SeasonDisplay from './SeasonDisplay'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return(
    <div>
      <SeasonDisplay/>
    </div>
  );
}

export default App;
