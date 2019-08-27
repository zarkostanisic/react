// Reducer controll state
import {ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED} from '../constants/action-types';

const initialState = {
  articles: [],
  remoteArticles: []
}

function rootReducer(state = initialState, action){
  console.log(action.type);
  
  if(action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if(action.type === FOUND_BAD_WORD){
    alert('FOUND BAD WORD!!!');
  }

  if(action.type === DATA_LOADED){
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;
