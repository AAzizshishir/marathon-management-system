import { Suspense } from "react";
import Banner from "../../components/banner/Banner";
import MarathonSection from "../../components/marathon/Marathons";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/loader/Loader";
import UpcomingMarathons from "../../components/upcomingMarathon/UpcomingMarathons";

const marathonDataPromise = fetch("http://localhost:3000/marathons").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <Helmet>
        <meta charset="UTF-8" />
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
        <MarathonSection
          marathonDataPromise={marathonDataPromise}
        ></MarathonSection>
      </Suspense>
      <UpcomingMarathons></UpcomingMarathons>
    </div>
  );
};

export default Home;
