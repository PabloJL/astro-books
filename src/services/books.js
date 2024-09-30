export const getBooks = async () => {
  const res = await fetch();

  const data = await res.json();
  const books = data;
  return books;
};

export const searchBooks = async (query) => {
  const apiKey = "AIzaSyAgNUguzdGrqdqyZ3yvYW6QvGklSk-4kww";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching books data");
    }
    const data = await response.json();
    console.log("Books Data:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
  const books = data;
  return books;
};
