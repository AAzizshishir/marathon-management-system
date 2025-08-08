import { use } from "react";
import UpcomingMarathonCard from "./UpcomingMarathonCard";

const UpcomingMarathons = ({ UpcomingMarathonsPromise }) => {
  const data = use(UpcomingMarathonsPromise);

  return (
    <div className="my-20 lg:px-10 px-4">
      <h1 className="text-center text-5xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((upcomingData) => (
          <UpcomingMarathonCard
            key={upcomingData._id}
            upcomingData={upcomingData}
          ></UpcomingMarathonCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
