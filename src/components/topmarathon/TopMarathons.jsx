import { use } from "react";
import Card from "./Card";

const TopMarathons = ({ marathonDataPromise }) => {
  const marathonsData = use(marathonDataPromise);

  return (
    <div className="my-20 px-4 lg:px-10 ">
      <h1 className="text-5xl text-center mb-3 font-bold">Top Marathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default TopMarathons;
