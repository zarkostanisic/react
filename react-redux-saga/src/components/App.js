import React, { Component } from 'react';
import ButtonBitcoin from '../components/ButtonBitcoin';
import ButtonFootball from '../components/ButtonFootball';
import News from '../components/News';
import Loading from '../components/Loading';

class App extends Component{
  render(){
    return(
      <div>
        <ButtonBitcoin/>
        <ButtonFootball/>
        <News/>
        <Loading/>
      </div>
    );
  }
}

export default App;
