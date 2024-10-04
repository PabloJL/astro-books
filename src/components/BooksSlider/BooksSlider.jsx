import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import { books } from "../../data/books";

export default function BooksSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="flex px-4 md:px-0">
      <button
        className="h-1/4 self-center text-white p-2 md:block hidden hover:bg-gray-300 hover:rounded-full dark:hover:bg-gray-800"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {books.map(({ id, title, img }) => {
          return (
            <SwiperSlide key={id}>
              <a
                className="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
                href={`/${title}`}
              >
                <img
                  className="aspect-[389/500] h-full object-cover w-full max-w-full rounded-lg"
                  src={img}
                  alt={`Portada del Libro ${title}`}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className="h-1/4 self-center text-white p-2 md:block hidden hover:bg-gray-300 hover:rounded-full dark:hover:bg-gray-800"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}
