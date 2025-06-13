// import { useState } from "react";
import { Link, useLoaderData } from "react-router";

const MarathonDetails = () => {
  // const [enable, setEnable] = useState(false);
  const {
    _id,
    title,
    location,
    distance,
    description,
    image,
    // createdAt,
    registrationCount,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
  } = useLoaderData();
  console.log(title);
  // console.log(data);

  // if (startRegistrationDate) {
  //   return setEnable(true);
  // }

  return (
    <div className="w-11/12 mx-auto my-10">
      <div>
        <img className="w-full" src={image} />
        <div>
          <h2>title:{title}</h2>
          <p>location:{location}</p>
          <p>distance:{distance}</p>
          <p>description:{description}</p>
          <p>Start Registration Date:{startRegistrationDate}</p>
          <p>End Registration Date:{endRegistrationDate}</p>
          <p>Marathon Start Date:{marathonStartDate}</p>
          <h3>registrationCount:{registrationCount}</h3>
          {/* {enable && } */}
          <Link to={`/marathonRegistration/${_id}`}>
            <button className="btn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarathonDetails;
