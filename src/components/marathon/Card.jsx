import { Link } from "react-router";

const Card = ({ marathonData }) => {
  const {
    image,
    title,
    location,
    startRegistrationDate,
    endRegistrationDate,
    _id,
  } = marathonData;
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-800">{location}</p>
          <div>
            <h2>Registration Dates</h2>
            {startRegistrationDate} to {endRegistrationDate}
          </div>
        </div>
        <Link to={`marathonDetails/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center cursor-pointer w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
