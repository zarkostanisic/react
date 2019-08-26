// Reducer controll state
import {ADD_ARTICLE, FOUND_BAD_WORD} from '../constants/action-types';

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action){
  if(action.type === ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if(action.type === FOUND_BAD_WORD){
    alert('FOUND BAD WORD!!!');
  }
  return state;
}

export default rootReducer;
