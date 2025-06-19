import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

const UpcomingMarathonCard = ({ upcomingData }) => {
  const { image, title, location, distance, registration, eventDate } =
    upcomingData;
  return (
    <div className="grid grid-cols-2">
      <img className="rounded-l-2xl h-full w-full object-cover" src={image} />
      <div className="bg-black opacity-85 text-white p-3 rounded-r-2xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="flex items-center gap-1 my-2">
          <FaLocationDot />
          <span>{location}</span>
        </p>
        <h3 className="flex items-center gap-1">
          {" "}
          <BiSolidCategory /> <span>{distance}</span>{" "}
        </h3>
        <h3 className="my-2">
          {" "}
          <span>Reg:</span> {registration}
        </h3>
        <p> Event: {eventDate}</p>
      </div>
    </div>
  );
};

export default UpcomingMarathonCard;
