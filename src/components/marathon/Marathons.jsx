import { use } from "react";
import Card from "./Card";

const Marathons = ({ marathonDataPromise }) => {
  const marathonsData = use(marathonDataPromise);
  console.log(marathonsData);
  return (
    <div className="my-16">
      <h1 className="text-6xl text-center my-5">Marathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {marathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Marathons;
