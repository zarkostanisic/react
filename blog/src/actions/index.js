import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch =>{
    const repsonse = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS',payload: repsonse});
}

export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const repsonse = await jsonPlaceholder.get('/users/' + id);

  dispatch({type: 'FETCH_USER', payload: repsonse.data});
});
