import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loader from "../components/loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader></Loader>;

  if (!user)
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;

  return children;
};

export default PrivateRoutes;
