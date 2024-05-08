export const getBooks = async () => {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=dune&key=AIzaSyAgNUguzdGrqdqyZ3yvYW6QvGklSk-4kww"
  );

  const books = await res.json();
  return { books };
};
