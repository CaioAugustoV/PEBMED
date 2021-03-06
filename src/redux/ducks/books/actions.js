import Types from './types';

export const getAllBooks = () => ({
  type: Types.ASYNC_BOOKS,
});

export const setBooks = (data = null) => ({
  type: Types.BOOKS,
  payload: data,
});

export const setFavorite = (id = null, value = false) => ({
  type: Types.FAVORITE,
  payload: {id, value},
});
