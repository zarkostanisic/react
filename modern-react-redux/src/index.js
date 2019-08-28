// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
  return 'Click on me!';
}

// Create a react component
const App = () => {
  const buttonText = ['Hi', 'There'];
  const style = {backgroundColor: 'blue', color: 'white'};
  const labelText = 'Enter name:';

  return <div>
      <label  className="label" for="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={style}>
        {buttonText}
        {/*getButtonText()*/}
      </button>
    </div>;
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  // document.getElementById('root')
  document.querySelector('#root')
);
