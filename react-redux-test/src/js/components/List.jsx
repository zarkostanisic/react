import React from 'react';

// Redux
import {connect} from 'react-redux';

// Redux
const mapStateToProps = (state) => {
  return {articles: state.articles};
};

const ConnectedList = ({articles}) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

// Redux
const List = connect(mapStateToProps)(ConnectedList);

export default List;
