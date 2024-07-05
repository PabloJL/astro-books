import Calendar from "../Calendar";
import { Modal } from "flowbite-react";
export default function BookModal({ title, img, author, pages, handleClick }) {
  return (
    <div
      id="crud-modal"
      aria-hidden="true"
      className="flex flex-col overflow-y-auto overflow-x-hidden fixed top-2 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 md:h-[calc(100%-1rem)] max-h-full "
    >
      <div className="relative p-4  w-full h-auto flex justify-center">
        <div className="flex flex-col w-full h-full items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-3xl  dark:border-zinc-800 dark:bg-zinc-900 ">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t w-full">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Edit Progress
            </h3>
            <button
              onClick={handleClick}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <section className="flex flex-col md:flex-row md:h-full md:w-full md:gap-10 items-center md:items-start ">
            <picture className="h-full md:w-1/2 p-4  w-1/2">
              <img
                src={img}
                alt={`Cover of book ${title}`}
                className="rounded-xl"
              />
            </picture>
            <aside className="p-4 flex flex-col gap-4 md:h-full justify-between">
              <div className="flex flex-col gap-1 md:gap-4">
                <h1 className="dark:text-white text-xl md:text-2xl font-black">
                  {title}
                </h1>
                <p className="dark:text-white text-base md:text-xl font-semibold">
                  {author}
                </p>
                <section className="flex md:flex-col flex-row gap-2">
                  <div>
                    <p className="dark:text-white text-sm md:text-xl font-semibold mb-2">
                      Started on:
                    </p>
                    <Calendar />
                  </div>
                  <div>
                    <p className="dark:text-white  text-sm md:text-xl font-semibold mb-2">
                      Ended on:
                    </p>
                    <Calendar />
                  </div>
                </section>

                <p className="dark:text-white  text-sm md:text-xl font-semibold">
                  Progress
                </p>
                <p className="dark:text-white  text-base md:text-xl font-semibold">
                  <input
                    type="number"
                    max={30}
                    className="w-1/4
                     dark:bg-zinc-700 rounded-lg text-center h-full"
                  />{" "}
                  /{pages} pages
                </p>
              </div>

              <button
                className="bg-blue-600 w-full h-10  text-white rounded-lg md:self-end"
                onClick={handleClick}
              >
                Save
              </button>
            </aside>
          </section>
        </div>
      </div>
    </div>
  );
}
