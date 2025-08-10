import { Helmet } from "react-helmet-async";
import Card from "../../components/topmarathon/Card";
import { useLoaderData } from "react-router";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Marathon = () => {
  const allMarathons = useLoaderData();

  return (
    <div className="my-10 px-4 lg:px-10">
      <Helmet>
        <title>All Marathon</title>
      </Helmet>
      <SectionTitle className="grid place-items-center">
        All Marathon
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {allMarathons.map((marathonData) => (
          <Card key={marathonData._id} marathonData={marathonData}></Card>
        ))}
      </div>
    </div>
  );
};

export default Marathon;
