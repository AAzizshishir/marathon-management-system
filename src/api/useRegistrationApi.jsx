import useAxiosSecure from "../hooks/UseAxiosSecure";

const useRegistrationApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyRegistrations = (email) => {
    return axiosSecure
      .get(`/registration?email=${email}`)
      .then((res) => res.data);
  };
  return {
    getMyRegistrations,
  };
};

export default useRegistrationApi;
