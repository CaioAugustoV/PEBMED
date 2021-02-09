import { all, fork } from 'redux-saga/effects';

import booksSaga from './saga/books';

export default function* rootSaga() {
  yield all([
    fork(booksSaga),
  ]);
}
