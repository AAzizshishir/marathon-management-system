import { Suspense } from "react";
import Banner from "../../components/banner/Banner";
import MarathonSection from "../../components/marathon/Marathons";
import { Helmet, HelmetProvider } from "react-helmet-async";

const marathonDataPromise = fetch("http://localhost:3000/marathons").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <HelmetProvider>
      <div className="w-11/12 mx-auto my-5">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Banner></Banner>
        <Suspense fallback="Data are comming...">
          <MarathonSection
            marathonDataPromise={marathonDataPromise}
          ></MarathonSection>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default Home;
