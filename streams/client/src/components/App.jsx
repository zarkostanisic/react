import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
  return <div>
    PageOne
    <br/>
    <a href="/pagetwo">Navigate to Page Two</a>
  </div>;
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <br/>
      <a href="/">Navigate to Page One</a>
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
