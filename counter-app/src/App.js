import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends React.Component {
  state = {
      counters: [
        {id:1, value: 4, selected: true},
        {id:2, value: 0, selected: false},
        {id:3, value: 0, selected: false},
        {id:4, value: 0, selected: false}
      ]
  }

  constructor(props){
    super(props);

    console.log('App - Constructor', this.props);
  }

  componentDidMount(){
    console.log('App - Mounted');
    // Ajax
    this.setState({movies: [
      {id: 1, name: 'Titanic'},
      {id: 2, name: 'Avatar'}]
    });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;

    this.setState({counters: counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;

      return c;
    });

    this.setState({counters: counters});
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);

    this.setState({counters: counters});
  }

  render(){
    console.log('App - Rendered');
    console.log(this.state.movies);
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length}/>
        <main className="container-fluid">
          <Counters counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
