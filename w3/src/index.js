import React from 'react';
import ReactDOM from 'react-dom';
import Garage from './garage';

// const myElement = (
//   <div>
//     <h1>I am a Header</h1>
//     <h1>I am a Header too.</h1>
//     <input type="text"/>
//   </div>
// );

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {favoriteColor: 'red'};
  }

  // static getDerivedStateFromProps(props, state){
  //   return{favoriteColor: props.favcol};
  // }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({favoriteColor: 'green'});
  //   }, 1000);
  // }

  // shouldComponentUpdate(){
  //   // return false;
  //   return true;
  // }

  changeColor = () => {
    this.setState({favoriteColor: 'blue'});
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById('div1').innerHTML = 'Before the update, the favorite was ' + prevState.favoriteColor;
  }

  componentDidUpdate(){
    document.getElementById('div2').innerHTML = 'The updated favorite is ' + this.state.favoriteColor;
  }


  render(){
    return(
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

class Container extends React.Component{
  constructor(props){
    super(props);
    this.state = {show: true};
  }

  delHeader = () => {
    this.setState({show: false});
  }

  render(){
    let myHeader;

    if(this.state.show){
      myHeader = <Child/>;
    };

    return(
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component{
  componentWillUnmount(){
    alert('The component named Header is about to be unmounted');
  }

  render(){
    return(
      <h1>Hello World!</h1>
    );
  }
}

class Football extends React.Component{
  // constructor(props){
  //   super(props);
  //
  //   this.shoot = this.shoot.bind(this);
  // }

  // shoot = (a, b) => {
  //   alert(a + " - " + b.type);
  // }

  shoot(a, b){
    alert(a + ' - ' + b.type);
  }

  render(){
    // return(
    //   <button onClick={(ev) => this.shoot('Goal', ev)}>Take the shot!</button>
    // );

    return(
      <button onClick={this.shoot.bind(this, 'Goal')}>Take the shot!</button>
    );
  }
}

// ReactDOM.render(myElement, document.getElementById('root'));
ReactDOM.render(
  <div><Garage size="big"/><Header favcol="yellow"/><Container/><Football/></div>,
   document.getElementById('root')
 );
