import React, {Component} from 'react';

class Car extends Component{
  constructor(props){
    super(props);

    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964
    }
  }

  changeColor = () => {
    this.setState({color: 'blue'});
  }

  render(){
    return(
      <div>
        <h1>My {this.props.brand.name}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button type="button"
          onClick={this.changeColor}
        >
          Change change
        </button>
      </div>
    );
  }
}

export default Car;
