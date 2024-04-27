export default function BookModal({ title, img, handleClick }) {
  return (
    <div
      id="crud-modal"
      aria-hidden="true"
      className="flex flex-col overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4  w-full h-3/4 flex justify-center">
        <div className="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl  dark:border-zinc-800 dark:bg-zinc-900 ">
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

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Started on: 25-04-2024
              </p>
            </div>

            <button
              className=" w-18 h-18 bg-red-600 rounded-xl mt-8 p-3 text-lg text-white font-bold uppercase"
              onClick={handleClick}
            >
              Close
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
