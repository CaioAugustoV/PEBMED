import Types from './types';

export const getData = () => ({
  type: Types.ASYNC_DATA,
});

export const setData = (data = null) => ({
  type: Types.DATA,
  payload: data,
});
