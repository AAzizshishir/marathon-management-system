import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const UpcomingMarathonCard = ({ upcomingData }) => {
  const { image, title, location, distance, registration, eventDate } =
    upcomingData;
  return (
    <div className=" bg-black opacity-85 text-white shadow-sm rounded-md">
      <figure>
        <img
          className="object-cover object-center h-52 rounded-t-md w-full"
          src={image}
        />
      </figure>
      <div className="card-body flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        <div className="flex gap-1 items-center">
          <FaLocationDot />
          {location}
        </div>
        <div className="flex gap-1 items-center">
          <BiSolidCategory />
          {distance}
        </div>
        <h4>Reg:{registration}</h4>
        <h4>Event:{eventDate}</h4>
      </div>
    </div>
  );
};

export default UpcomingMarathonCard;
