import React, {Component} from 'react';
import Car from './car';

class Garage extends Component{
  render(){
    const brand = {name: 'Ford', model: 'Mustang'};

    return(
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car brand={brand}/>
      </div>
    );
  }
}

// function Car(){
//   return <h2>Hi, I am also a Car</h2>;
// }

export default Garage;
