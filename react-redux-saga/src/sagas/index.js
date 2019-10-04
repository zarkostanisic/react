import { all } from 'redux-saga/effects';
import bitcoinSaga from './bitcoinSaga';
import footballSaga from './footballSaga';

export default function* rootSaga(){
  yield all([
    bitcoinSaga(),
    footballSaga()
  ]);
}
