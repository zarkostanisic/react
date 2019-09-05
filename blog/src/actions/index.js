import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Fetch posts
export const fetchPosts = () => async dispatch =>{
    const repsonse = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS',payload: repsonse});
}

// Fetch user
// 1.
export const fetchUser = (id) => async dispatch =>{
  const repsonse = await jsonPlaceholder.get('/users/' + id);

  dispatch({type: 'FETCH_USER', payload: repsonse.data});
}

// 2.
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const repsonse = await jsonPlaceholder.get('/users/' + id);
//
//   dispatch({type: 'FETCH_USER', payload: repsonse.data});
// });

export const fetchPostsAndUsers = () => async dispatch => {
  console.log('About to fetch posts');
  await dispatch(fetchPosts());
  console.log('Fetched posts!');
}
