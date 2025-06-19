import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const UpcomingMarathonCard = ({ upcomingData }) => {
  const { image, title, location, distance, registration, eventDate } =
    upcomingData;
  return (
    <div className=" bg-black opacity-85 text-white flex shadow-sm">
      <figure>
        <img className="object-cover object-center h-72" src={image} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
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
