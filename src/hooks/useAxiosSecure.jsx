import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://marathon-management-system-server-ten.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return axiosInstance;
};

export default useAxiosSecure;
