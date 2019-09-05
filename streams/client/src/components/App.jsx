import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <button>Click Me!</button>
    </div>
  );
}

class App extends Component{
  render(){
    return(
      <div>
        <div>
          <BrowserRouter>
            <Route path="/" exact component={PageOne}/>
            <Route path="/pagetwo" component={PageTwo}/>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
