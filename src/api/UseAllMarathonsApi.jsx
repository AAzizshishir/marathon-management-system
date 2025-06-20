import useAxiosSecure from "../hooks/UseAxiosSecure";

const UseAllMarathonsApi = () => {
  const axiosSecure = useAxiosSecure();

  const getAllMarathons = () => {
    return axiosSecure.get(`/allMarathons`).then((res) => res.data);
  };

  return {
    getAllMarathons,
  };
};

export default UseAllMarathonsApi;
