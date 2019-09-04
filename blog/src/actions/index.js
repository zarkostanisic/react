import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch =>{
    const promise = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS',payload: promise});
}
