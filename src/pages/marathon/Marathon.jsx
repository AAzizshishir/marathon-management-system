import { Helmet } from "react-helmet-async";
import Card from "../../components/topmarathon/Card";
import { useEffect, useState } from "react";
import UseAllMarathonsApi from "../../api/useallMarathonsApi";

const Marathon = () => {
  const { getAllMarathons } = UseAllMarathonsApi();
  const [allMarathonsData, setAllMarathonsData] = useState([]);

  useEffect(() => {
    getAllMarathons().then((data) => {
      setAllMarathonsData(data);
    });
  }, []);

  return (
    <div className="my-10 px-4 lg:px-10 min-h-screen">
      <Helmet>
        <title>All Marathon</title>
      </Helmet>
      <h1 className="text-6xl font-bold text-center">All Marathons</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {allMarathonsData.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Marathon;
