import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router";
import CountDown from "../../components/countDown/CountDown";

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
  const isRegistrationOpen = today >= startDate && today <= endDate;

  const handlebtn = (id) => {
    navigate(`/marathonRegistration/${id}`);
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <Helmet>
        <title>Marathon Details</title>
      </Helmet>
      <div>
        <img className="w-full" src={image} />
        <div className="flex items-center justify-between">
          <div>
            <h2>title:{title}</h2>
            <p>location:{location}</p>
            <p>distance:{distance}</p>
            <p>description:{description}</p>
            <p>Start Registration Date:{startRegistrationDate}</p>
            <p>End Registration Date:{endRegistrationDate}</p>
            <p>Marathon Start Date:{marathonStartDate}</p>
            <h3>registrationCount:{totalRegistrationCount}</h3>

            <button
              onClick={() => handlebtn(_id)}
              disabled={!isRegistrationOpen}
              className={`btn disabled:cursor-not-allowed`}
            >
              Register
            </button>
          </div>
          <div>
            <CountDown
              startDate={startDate}
              endDate={endDate}
              today={today}
            ></CountDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
