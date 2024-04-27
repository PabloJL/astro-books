import { useState } from "react";
import BookModal from "./BookModal";

export const BookCard = ({ id, title, img, author, pages }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={img}
          alt={`Cover of book ${title}`}
        />
        <aside className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="text-left">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-medium text-lg text-gray-700 dark:text-gray-400">
              {author}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Started on: 25-04-2024
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              100/{pages} pages
            </p>
          </div>

          <div className="flex justify-end mb-1">
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              95%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-green-600 h-1.5 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
        </aside>
      </button>
      {openModal && (
        <BookModal title={title} img={img} handleClick={handleClick} />
      )}
    </div>
  );
};
