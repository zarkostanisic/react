import React, {Component} from 'react';
import {BrowserRouter, Route/*, Link, HashRouter, MemoryRouter*/} from 'react-router-dom';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

class App extends Component{
  render(){
    return(
      <div>
        <div className="ui container">
          <BrowserRouter>
            <div>
              <Header/>
              <Route path="/" exact component={StreamList}/>
              <Route path="/streams/new" exact component={StreamCreate}/>
              <Route path="/streams/delete" exact component={StreamDelete}/>
              <Route path="/streams/edit" exact component={StreamEdit}/>
              <Route path="/streams/show" exact component={StreamShow}/>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
