// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        <div className="bg-[url(https://i.ibb.co/zH7fYpj9/carousal1.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[600px] flex items-center justify-start relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 w-7/12 ml-10 md:ml-32 text-white">
            <h2 className="text-5xl font-bold md:text-8xl md:font-extrabold mb-3">
              Run Towards Glory
            </h2>
            <p className="text-base md:text-xl">
              Join thousands of passionate runners in an unforgettable journey
              of speed, strength, and spirit. Your race begins here — are you
              ready?
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url(https://i.ibb.co/TBcxfbGh/carousal2.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[600px] flex items-center justify-start relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 w-7/12 ml-10 md:ml-32 text-white">
            <h2 className="text-5xl font-bold md:text-8xl md:font-extrabold mb-3">
              Every Step Counts
            </h2>
            <p className="text-base md:text-xl">
              Whether you're chasing a personal best or just starting out, this
              marathon is your moment. Take the first step — we'll run the rest
              together.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-[url(https://i.ibb.co/hFLJsxcB/carousal3.jpg)] bg-cover object-cover bg-no-repeat bg-center w-full h-[600px] flex items-center justify-start relative">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 w-7/12 ml-10 md:ml-32 text-white">
            <h2 className="text-5xl font-bold md:text-8xl md:font-extrabold mb-3">
              Push Beyond Limits
            </h2>
            <p className="text-base md:text-xl">
              More than a race — it's a challenge to your body and a celebration
              of your willpower. Dare to go further, faster, and stronger.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
