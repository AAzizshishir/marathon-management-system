import useAuth from "../../../hooks/useAuth";
import { Suspense } from "react";
import ApplyList from "../../../components/applyList/ApplyList";
import { registrationPromise } from "./../../../api/registrationApi";
import Loader from "../../../components/loader/Loader";
import { Helmet } from "react-helmet-async";

const MyApplyList = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>My Apply</title>
      </Helmet>
      <Suspense fallback={<Loader></Loader>}>
        <ApplyList
          registrationPromise={registrationPromise(user.email)}
        ></ApplyList>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
