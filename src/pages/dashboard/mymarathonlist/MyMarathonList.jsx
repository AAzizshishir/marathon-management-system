import { Suspense } from "react";
import MarathonList from "../../../components/marathonList/MarathonList";
import Loader from "../../../components/loader/Loader";
import { marathonsPromise } from "./../../../api/registrationApi";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const MyMarathonList = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>My Marathon</title>
      </Helmet>
      <Suspense fallback={<Loader></Loader>}>
        <MarathonList
          marathonsPromise={marathonsPromise(user.email)}
        ></MarathonList>
      </Suspense>
    </div>
  );
};

export default MyMarathonList;
