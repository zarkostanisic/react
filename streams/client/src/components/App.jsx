import React, {Component} from 'react';
import {BrowserRouter, Route, Link/*, HashRouter, MemoryRouter*/} from 'react-router-dom';

const PageOne = () => {
  return <div>
    PageOne
    <br/>
    <Link to="/pagetwo">Navigate to Page Two</Link>
  </div>;
}

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <br/>
      <Link to="/">Navigate to Page One</Link>
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
