import { takeLatest, put } from 'redux-saga/effects'
import { GET_BITCOIN_NEWS, NEWS_RECEIVED } from '../actions/action-types';

export default function* watchAction() {
  yield takeLatest(GET_BITCOIN_NEWS, fetchBitcoinNews)
}

export function* fetchBitcoinNews(){
  const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-09-04&sortBy=publishedAt&language=en&apiKey=5ebd77f185ef473fa6274e631552e499')
    .then(response => response.json());

  yield put({type: NEWS_RECEIVED, json: json.articles});
}
