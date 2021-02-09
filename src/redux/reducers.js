import { combineReducers } from 'redux';

import books from './ducks/books';

const reducers = combineReducers({
  books,
});

export default reducers;
