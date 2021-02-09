import Types from './types';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
