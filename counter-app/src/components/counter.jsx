import React, { Component } from 'react';

class Counter extends Component{
  state = {
      value: this.props.counter.value
  };

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      // Ajax
      console.log('Ajax');
    }
  }

  render(){
    console.log('Counter' + this.props.counter.id + ' - Rendered');
    return(
      <div className="pb-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary btn-sm" onClick = {() => this.props.onIncrement(this.props.counter)}>Increment</button>
          <span className="ml-2">Counter #{this.props.counter.id}</span>
          <button className="btn btn-danger btn-sm ml-2" onClick = {() => this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  }

  getBadgeClasses(){
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';

    return classes;
  }

  formatCount(){
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
