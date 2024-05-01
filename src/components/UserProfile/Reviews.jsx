import { books } from "../../data/books";

export default function Reviews() {
  return books.map((book) => {
    return (
      <article className="md:gap-8 md:grid md:grid-cols-3 p-10">
        <div>
          <div className="flex items-center mb-6 md:flex-col md:items-start md:gap-4">
            <img
              className="w-20 h-20 md:w-1/2 md:h-1/2 rounded-md hidden md:flex "
              src={book.img}
              alt=""
            />
            <div className="md:ms-0 text-3xl font-black   md:font-medium md:text-xl dark:text-white">
              <p>{book.title}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-6 md:mt-0">
          <div className="flex items-start mb-5">
            <div className="pe-4">
              <footer>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Reviewed: <time>January 20, 2022</time>
                </p>
              </footer>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Spotless, good appliances, excellent layout, host was genuinely
                nice and helpful.
              </h4>
            </div>
            <p className="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
              8.7
            </p>
          </div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The flat was spotless, very comfortable, and the host was amazing. I
            highly recommend this accommodation for anyone visiting New York
            city centre. It's quite a while since we are no longer using hotel
            facilities but self contained places. And the main reason is poor
            cleanliness and staff not being trained properly. This place
            exceeded our expectation and will return for sure.
          </p>
          <p className="mb-5 text-gray-500 dark:text-gray-400">
            It is obviously not the same build quality as those very expensive
            watches. But that is like comparing a Citroën to a Ferrari. This
            watch was well under £100! An absolute bargain.
          </p>
          <aside className="flex items-center mt-3">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              <svg
                className="w-3.5 h-3.5 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"></path>
              </svg>
              Like
            </a>
          </aside>
        </div>
      </article>
    );
  });
}
