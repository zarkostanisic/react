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

// Fetch posts and users
// 1.
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//   await dispatch(fetchPosts());
//
//   const userIds = _.uniq(_.map(getState().posts, 'userId'));
//   userIds.forEach(id => dispatch(fetchUser(id)));
// }

// 2.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}
