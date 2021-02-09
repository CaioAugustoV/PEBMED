import _ from 'lodash';

export const formatterBooks = (arr = []) => {
  if (!arr.length) return [];
  const books = [];
  const findIdCateforys = (id) => _.find(books, (item) => item?.id === id);
  const findIndexCateforys = (id) =>
    _.findIndex(books, (item) => item?.id === id);

  arr.forEach((item) => {
    const category = item?.category;
    const categoryId = category?.id;
    if (!findIdCateforys(categoryId)) books.push({...category, contents: []});
  });

  arr.forEach((item) => {
    const category = item?.category;
    const content = item?.content;
    const categoryId = category?.id;
    const index = findIndexCateforys(categoryId);
    books[index].contents.push(content);
  });
  return books || [];
};
