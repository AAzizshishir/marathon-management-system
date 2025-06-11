import { useLoaderData } from "react-router";
import Card from "../../components/marathon/Card";

const Marathon = () => {
  const allMarathonsData = useLoaderData();
  console.log(allMarathonsData);
  return (
    <div className="my-10 w-11/12 mx-auto">
      <h1 className="text-6xl text-center">Marathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allMarathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Marathon;
