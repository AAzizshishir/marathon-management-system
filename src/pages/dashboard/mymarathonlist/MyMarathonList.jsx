import { Suspense } from "react";
import MarathonList from "../../../components/marathonList/MarathonList";
import Loader from "../../../components/loader/Loader";
import { marathonsPromise } from "./../../../api/registrationApi";
import useAuth from "../../../hooks/useAuth";

const MyMarathonList = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <MarathonList
          marathonsPromise={marathonsPromise(user.email)}
        ></MarathonList>
      </Suspense>
    </div>
  );
};

export default MyMarathonList;
