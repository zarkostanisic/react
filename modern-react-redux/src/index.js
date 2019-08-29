// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

class App extends React.Component{
  render(){
    return(
      <div className="ui container comments">
        <ApprovalCard>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail author="Sam"
            timeAgo="Today at 6:00PM"
            content="Nice blog post"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail author="Alex"
            timeAgo="Yesterday at 5:42AM"
            content="I like the subject"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  // document.getElementById('root')
  document.querySelector('#root')
);
