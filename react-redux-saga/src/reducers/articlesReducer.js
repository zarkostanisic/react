const INITIAL_STATE = {
  news: [],
  loading: false
}
const reducer = (state = INITIAL_STATE , action) => {
  switch(action.type){
    case 'GET_BITCOIN_NEWS':
    case 'GET_FOOTBALL_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state,  news: action.json, loading: false };
    default: 
      return state;
  }
};

export default reducer;
