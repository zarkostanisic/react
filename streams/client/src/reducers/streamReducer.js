import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EDIT_STREAM:
      return state.map(stream => {
        if(stream.id === action.payload.id){
          return action.payloadl
        }else{
          return stream;
        }
      });
    default:
      return state;
  }
}
