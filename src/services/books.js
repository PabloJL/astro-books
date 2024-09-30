export const getBooks = async () => {
  const res = await fetch();

  const data = await res.json();
  const books = data;
  return books;
};
