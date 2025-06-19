import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const UpcomingMarathons = () => {
  return (
    <div className="my-20 container mx-auto px-4">
      <h1 className="text-center text-5xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Sunrise Sprint</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Austin, Texas</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Run Wild Marathon</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Seattle, Washington</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Heroes on the Run</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Atlanta, Georgia</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Chasing Shadows Marathon</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Minneapolis, Minnesota</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Vibrant Trails Marathon</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Orlando, Florida</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="grid grid-cols-2">
          <img
            className="rounded-l-2xl h-full object-cover"
            src="https://i.ibb.co/FkVzMVGL/slider-3.jpg"
          />
          <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl">
            <h2 className="text-2xl font-bold">Into the Horizon Marathon</h2>
            <p className="flex items-center gap-1 my-1.5">
              <FaLocationDot />
              <span>Salt Lake City, Utah</span>
            </p>
            <h3 className="flex items-center gap-1">
              {" "}
              <BiSolidCategory /> <span>20k</span>{" "}
            </h3>
            <h3 className="my-1">
              {" "}
              <span>Reg:</span> 06/15/2025 → 06/25/2025
            </h3>
            <p> Event: 07/03/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMarathons;
