import { combineReducers } from 'redux';

import cards from './ducks/cards';

const reducers = combineReducers({
  cards,
});

export default reducers;
