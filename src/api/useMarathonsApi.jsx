import useAxiosSecure from "../hooks/UseAxiosSecure";

const useMarathonsApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyMarathons = (email) => {
    return axiosSecure
      .get(`/myMarathons?email=${email}`)
      .then((res) => res.data);
  };

  return {
    getMyMarathons,
  };
};

export default useMarathonsApi;
