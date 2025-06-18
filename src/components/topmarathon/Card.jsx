import { Link } from "react-router";

const Card = ({ marathonData }) => {
  const {
    image,
    title,
    location,
    startRegistrationDate,
    endRegistrationDate,
    _id,
    createdAt,
  } = marathonData;
  return (
    // dark:bg-gray-50 dark:text-gray-800
    <div className="rounded-md shadow-md bg-base-100 text-base-content flex flex-col justify-between p-4">
      <img className="object-cover object-center h-72 rounded-lg" src={image} />
      <div className="flex flex-col justify-between flex-1 mt-4">
        <div className="flex flex-col justify-between flex-1">
          <h2 className="text-3xl font-semibold tracking-wide my-1.5">
            {title}
          </h2>
          <p className="dark:text-gray-800">
            <span className="text-lg font-medium">Location: </span>
            {location}
          </p>
          <div className="my-1.5">
            <h3 className="text-lg font-medium">Registration Dates:</h3>
            <p>
              {startRegistrationDate} to {endRegistrationDate}
            </p>
          </div>
          <p className="mb-3">
            <span className="text-lg font-medium">Created At: </span>
            {createdAt}
          </p>
          <Link to={`/marathonDetails/${_id}`}>
            <button className="btn font-secondary w-full p-3 font-normal text-xl tracking-wider bg-primary text-primary-content">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
