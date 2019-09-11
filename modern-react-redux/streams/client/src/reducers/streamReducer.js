import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

// const INITIAL_STATE = {
//
// };

// const streamReducer (state = INITIAL_STATE, action) => {
//   switch(action.type){
//     case EDIT_STREAM:
//       return state.map(stream => {
//         if(stream.id === action.payload.id){
//           return action.payloadl
//         }else{
//           return stream;
//         }
//       });
//     default:
//       return state;
//   }
// }

export default  (state = {}, action) => {
  switch(action.type){
    case CREATE_STREAM:
     return {...state, [action.payload.id]: action.payload};
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
     return _.omit(state, action.payload);
    case EDIT_STREAM:
      // const newState = {...state}
      // newState[action.payload.id] = action.payload;
      // return newState;

      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
}
