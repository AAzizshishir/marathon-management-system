import { Suspense } from "react";
import Banner from "../../components/banner/Banner";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/loader/Loader";
import UpcomingMarathons from "../../components/upcomingMarathon/UpcomingMarathons";
import Plans from "../../components/plans/Plans";
import Faq from "../../components/faq/Faq";
import TopMarathons from "../../components/topmarathon/TopMarathons";

const marathonDataPromise = fetch("http://localhost:3000/marathons").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Suspense fallback={<Loader></Loader>}>
        <TopMarathons marathonDataPromise={marathonDataPromise}></TopMarathons>
      </Suspense>
      <UpcomingMarathons></UpcomingMarathons>
      <Plans></Plans>
      <Faq></Faq>
    </div>
  );
};

export default Home;
