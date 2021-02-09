import axios from 'axios';

export const getAllsBooks = async () => {
  const url = "https://private-54fe53-pebmeddesafio.apiary-mock.com/contents"
  return await axios.get(url);
};