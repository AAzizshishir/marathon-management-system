import axios from "axios";

export const registrationPromise = (email) => {
  return axios.get(`http://localhost:3000/registration?email=${email}`);
};
