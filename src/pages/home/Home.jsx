import { Suspense } from "react";
import Banner from "../../components/banner/Banner";
import Marathons from "../../components/marathon/Marathons";

const marathonDataPromise = fetch("http://localhost:3000/marathons").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <Banner></Banner>
      <Suspense fallback="Data are comming...">
        <Marathons marathonDataPromise={marathonDataPromise}></Marathons>
      </Suspense>
    </div>
  );
};

export default Home;
