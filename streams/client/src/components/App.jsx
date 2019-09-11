import React, {Component} from 'react';
import {/*BrowserRouter,*/Router, Route/*, Link, HashRouter, MemoryRouter*/, Switch } from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

class App extends Component{
  render(){
    return(
      <div>
        <div className="ui container">
          <Router history={history}>
            <div>
              <Header/>
              <Switch>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/:id" exact component={StreamShow}/>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
