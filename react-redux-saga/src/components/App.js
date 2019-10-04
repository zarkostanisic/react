import React, { Component } from 'react';
import ButtonBitcoin from './ButtonBitcoin';
import ButtonFootball from './ButtonFootball';
import News from './News';
import Loading from './Loading';

class App extends Component{
  render(){
    return(
      <div>
        <ButtonBitcoin/>
        <ButtonFootball/>
        <Loading/>
        <News/>
      </div>
    );
  }
}

export default App;
