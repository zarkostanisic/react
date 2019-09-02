// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Comments - Section 3
// import App from './components/comments/App';

// Seasons - Section 4, 5, 6
// import App from './components/seasons/App';

// Pics - Section 7, 8, 9, 10
// import App from './components/pics/App';

// Buildings - Section 11
import App from './components/buildings/App';

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  // document.getElementById('root')
  document.querySelector('#root')
);
