import Types from './types';

const initialState = {
  books: null,
  favorite: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case Types.FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          [action.payload.id]: action.payload.value
        },
      };
    default:
      return state;
  }
};
