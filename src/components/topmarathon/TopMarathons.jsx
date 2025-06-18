import { use } from "react";
import Card from "./Card";

const TopMarathons = ({ marathonDataPromise }) => {
  const marathonsData = use(marathonDataPromise);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-5xl text-center mb-3 font-bold">Top Marathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default TopMarathons;
