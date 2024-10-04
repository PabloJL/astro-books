import { useState } from "react";
import { searchBooks } from "../services/books";

export default function Search() {
  const [search, setSearch] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const books = await searchBooks(search);
    setFetchedBooks(books); // If the response contains items
  };

  return (
    <div className="w-full h-full p-8 md:p-0">
      <div className="block relative ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <form onSubmit={handleSearch}>
          <input
            id="default-search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="block w-full h-full p-4 ps-10 text-lg text-gray-900 border border-gray-300 rounded-xl bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-900 dark:border-zinc-900 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500"
            placeholder="Search books..."
          />
        </form>
      </div>

      {/* Display books */}
      <ul className="dark:text-white text-black grid md:grid-cols-4 grid-cols-2 my-10 ">
        {fetchedBooks.map((book) => (
          <li
            key={book.id}
            className=" w-full h-full text-center justify-items-center p-4 md:p-8 hover:scale-125"
          >
            <img
              src={book.volumeInfo?.imageLinks?.thumbnail}
              alt={book.volumeInfo?.title}
              className=" rounded-md object-cover md:scale-110"
            />
            <h1 className=" font-bold text-base md:text-lg mt-4">
              {book.volumeInfo?.title || "No title available"}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
