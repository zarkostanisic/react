import React from 'react';
import ApprovalCard from './ApprovalCard';

class CommentDetail extends React.Component{
  render(){
    return(
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.avatar}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.content}</div>
        </div>
        {/*<ApprovalCard/>*/}
      </div>
    );
  }
}

export default CommentDetail;
