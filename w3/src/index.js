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

class MyForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      age: null,
      errorMessage: '',
      description: 'The content of a textarea goes in the value attribute',
      brand: 'Volvo'
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let username = this.state.username;
    let age = this.state.age;

    // if(!Number(age)){
    //   alert('Your age must be a number');
    // }

    alert('You are submitting ' + username + ' - ' + age);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';

    if(nam === 'age'){
      if(val != '' && !Number(val)){
        err = <strong>Your age must be a number</strong>;
      }
    }

    this.setState({errorMessage: err});
    this.setState({[nam]: val});
  }

  render(){
    let header = '';

    if(this.state.username){
      header = <h1>Hello {this.state.username}</h1>;
    }else{
      header = '';
    }

    return(
      <form onSubmit={this.mySubmitHandler}>
        {header}
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input type="text"
          name="username"
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input type="text"
          name="age"
          onChange={this.myChangeHandler}
        />
        <p>Description:</p>
        <textarea value={this.state.description}></textarea>
        <p>Brand:</p>
        <select value={this.state.brand}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <br/>
        <input type="submit"/>
        <br/>
        {this.state.errorMessage}
      </form>
    );
  }
}

// ReactDOM.render(myElement, document.getElementById('root'));
ReactDOM.render(
  <div>{/*<Garage size="big"/><Header favcol="yellow"/><Container/><Football/>*/}<MyForm/></div>,
   document.getElementById('root')
 );
