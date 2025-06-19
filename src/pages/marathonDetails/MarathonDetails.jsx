import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router";
import CountDown from "../../components/countDown/CountDown";
import { FaLocationDot } from "react-icons/fa6";

const MarathonDetails = () => {
  const navigate = useNavigate();
  const {
    _id,
    title,
    location,
    distance,
    description,
    image,
    totalRegistrationCount,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
  } = useLoaderData();

  const startDate = new Date(startRegistrationDate).toLocaleDateString();
  const endDate = new Date(endRegistrationDate).toLocaleDateString();
  const today = new Date().toLocaleDateString();
  const isRegistrationOpen = today > startDate && today < endDate;

  const handlebtn = (id) => {
    navigate(`/marathonRegistration/${id}`);
  };

  return (
    <div className="container mx-auto my-10">
      <Helmet>
        <title>Marathon Details</title>
      </Helmet>
      <div className="lg:flex items-center justify-between gap-4 p-4">
        <div className="flex-1 w-50%">
          <img className="w-full rounded-lg object-cover" src={image} />
        </div>
        <div className="flex-1 bg-gray-200 p-3 shadow-lg">
          <div>
            <h2 className="text-5xl font-extrabold">{title}</h2>
            <div className="flex items-center gap-1.5 my-2 text-lg font-semibold">
              <FaLocationDot />
              {location}
            </div>
            <div className="my-2 text-lg font-semibold">
              <span>Distance: </span>
              {distance}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">description: </span>
              {description}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">
                Start Registration Date:{" "}
              </span>
              {startRegistrationDate}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">
                End Registration Date:{" "}
              </span>
              {endRegistrationDate}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">
                Marathon Start Date:{" "}
              </span>
              {marathonStartDate}
            </div>
            <h3 className="my-2 text-lg font-semibold">
              registrationCount: {totalRegistrationCount}
            </h3>

            <button
              onClick={() => handlebtn(_id)}
              disabled={!isRegistrationOpen}
              className={`btn disabled:cursor-not-allowed bg-primary text-primary-content font-secondary tracking-wider text-xl font-normal`}
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <CountDown endDate={endDate}></CountDown>
      </div>
    </div>
  );
};

export default MarathonDetails;
