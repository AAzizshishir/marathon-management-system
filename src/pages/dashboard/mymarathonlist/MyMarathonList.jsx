import { Suspense } from "react";
import MarathonList from "../../../components/marathonList/MarathonList";
import Loader from "../../../components/loader/Loader";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useMarathonsApi from "../../../api/useMarathonsApi";

const MyMarathonList = () => {
  const { user } = useAuth();

  const { getMyMarathons } = useMarathonsApi();

  return (
    <div>
      <Helmet>
        <title>My Marathon</title>
      </Helmet>
      <Suspense fallback={<Loader></Loader>}>
        <MarathonList
          getMyMarathons={getMyMarathons(user.email)}
        ></MarathonList>
      </Suspense>
    </div>
  );
};

export default MyMarathonList;
