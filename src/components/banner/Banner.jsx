// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="bg-[url(https://i.ibb.co/nqBbJgDV/slider-1.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[500px] flex items-center justify-center">
          <div className="w-10/12 mx-auto">
            <h2 className="text-6xl text-teal-500 font-bold">
              This is marathon page,this page you will{" "}
              <Typewriter
                words={[
                  "Add marathon",
                  "Update",
                  "Delete",
                  "registration",
                  "and many more!",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              deleniti.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url(https://i.ibb.co/xKp88XBQ/slider-2.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[500px] flex items-center justify-center">
          <div className="w-10/12 mx-auto">
            <h2 className="text-6xl text-teal-500 font-bold">
              This is marathon page,this page you will{" "}
              <Typewriter
                words={[
                  "Add marathon",
                  "Update",
                  "Delete",
                  "registration",
                  "and many more!",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              deleniti.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url(https://i.ibb.co/FkVzMVGL/slider-3.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[500px] flex items-center justify-center">
          <div className="w-10/12 mx-auto">
            <h2 className="text-6xl text-teal-500 font-bold">
              This is marathon page,this page you will{" "}
              <Typewriter
                words={[
                  "Add marathon",
                  "Update",
                  "Delete",
                  "registration",
                  "and many more!",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              deleniti.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
