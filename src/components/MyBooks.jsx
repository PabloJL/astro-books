import { books } from "../data/books";
import { BookCard } from "./ListOfBooks/BookCard";

export default function MyBooks() {
  return (
    <div>
      <ul className="flex flex-col gap-8 px-4">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookCard
                transition:name={`book ${book.id} box`}
                client:load
                id={book.id}
                title={book.title}
                img={book.img}
                author={book.author}
                pages={book.pages}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
