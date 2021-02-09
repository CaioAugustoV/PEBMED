import { all, call, take, takeEvery, race, put } from 'redux-saga/effects';
import Types from '../ducks/cards/types';
import * as actions from '../ducks/cards/actions';
import * as service from '../services/cards';

function* getData() {
  yield put(actions.setData("Teste"));
}

export default function* cartSaga() {
  yield all([
    takeEvery(Types.ASYNC_DATA, getData)
  ]);
}
