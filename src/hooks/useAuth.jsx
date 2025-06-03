import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const authInfo = AuthContext();
  return authInfo;
};

export default useAuth;
