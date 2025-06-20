import useAuth from "../../../hooks/useAuth";
import { Suspense } from "react";
import ApplyList from "../../../components/applyList/ApplyList";
import Loader from "../../../components/loader/Loader";
import { Helmet } from "react-helmet-async";
import useRegistrationApi from "../../../api/useRegistrationApi";

const MyApplyList = () => {
  const { user } = useAuth();

  const { getMyRegistrations } = useRegistrationApi();

  return (
    <div>
      <Helmet>
        <title>My Apply</title>
      </Helmet>
      <Suspense fallback={<Loader></Loader>}>
        <ApplyList
          getMyRegistrations={getMyRegistrations(user.email)}
        ></ApplyList>
      </Suspense>
    </div>
  );
};

export default MyApplyList;
