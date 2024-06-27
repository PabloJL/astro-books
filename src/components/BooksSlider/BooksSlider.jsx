import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { books } from "../../data/books";

export default function BooksSlider() {
  return (
    <div className=" px-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {books.map(({ id, title, img }) => {
          return (
            <SwiperSlide key={id}>
              <a
                class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"
                href={`/${title}`}
              >
                <img
                  class="aspect-[389/500] h-full object-cover w-full max-w-full rounded-lg"
                  src={img}
                  alt={`Portada del Libro ${title}`}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
