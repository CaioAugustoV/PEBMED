import { all, call, take, takeEvery, race, put } from 'redux-saga/effects';
import Types from '../ducks/books/types';
import * as actions from '../ducks/books/actions';
import * as service from '../services/books';
import { formatterBooks } from '../../formatters/books';

function* getBooks() {
  try {
    const { data } = yield call(service.getAllsBooks);
    const formatter = formatterBooks(data);
    yield put(actions.setBooks(formatter));
  } catch (err) {
    console.log(err);
  }
}

export default function* booksSaga() {
  yield all([
    takeEvery(Types.ASYNC_BOOKS, getBooks)
  ]);
}
