// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";

const slides = [
  {
    image: "https://i.ibb.co.com/rf60hCBt/marathon01.jpg",
    title: "City Streets, Racing Hearts",
    description:
      "Feel the pulse of the city as thousands unite in motion. Every stride echoes determination, every breath fuels ambition. This is more than a race — it’s a movement.",
  },
  {
    image: "https://i.ibb.co.com/q3sC0vPw/marathon02.jpg",
    title: "Stride Together, Rise Stronger",
    description:
      "On these city streets, every runner has a story. Whether you're chasing a new milestone or simply showing up, your journey matters. Run with purpose, push your limits, and feel the power of unity in motion.",
  },
  {
    image: "https://i.ibb.co.com/xK2ZjXz5/marathon05.jpg",
    title: "Push Beyond Limits",
    description:
      "Every race begins with a single step — and the moment you tie your laces, you commit to more than just distance.A runner preparing to defy boundaries, chase goals, and celebrate the strength within.Ready to go further, faster and stronger",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-start px-6 lg:px-10"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 max-w-4xl text-white animate-fadeIn">
              <h2 className="text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <Link to={"/marathon"}>
                <button className="bg-white cursor-pointer text-black font-semibold px-6 py-3 rounded-full hover:bg-primary transition duration-300">
                  🏃‍♂️ Join the Race
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
