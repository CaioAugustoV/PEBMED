import Types from './types';

const initialState = {
  books: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
