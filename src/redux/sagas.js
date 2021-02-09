import { all, fork } from 'redux-saga/effects';

import cardsSaga from './saga/cards';

export default function* rootSaga() {
  yield all([
    fork(cardsSaga),
  ]);
}
