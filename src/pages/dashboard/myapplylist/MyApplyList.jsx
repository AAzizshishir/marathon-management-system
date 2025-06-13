import useAuth from "../../../hooks/useAuth";
import { Suspense } from "react";
import ApplyList from "../../../components/applyList/ApplyList";
import { registrationPromise } from "./../../../api/registrationApi";
import Loader from "../../../components/loader/Loader";

const MyApplyList = () => {
  const { user } = useAuth();
  return (
    <div>
      <Suspense fallback={<Loader></Loader>}>
        <ApplyList
          registrationPromise={registrationPromise(user.email)}
        ></ApplyList>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
