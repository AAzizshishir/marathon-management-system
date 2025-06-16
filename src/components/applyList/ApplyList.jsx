import { use, useEffect, useState } from "react";
import Rows from "./Rows";
import axios from "axios";
import Swal from "sweetalert2";

const ApplyList = ({ registrationPromise }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const data = use(registrationPromise);
  const [registrationData, setRegistrationData] = useState(data.data);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setRegistrationData(data.data);
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/searchMarathon?keyword=${searchTerm}`
        );
        setRegistrationData(res.data);
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong, Try again!",
        });
      }
    };

    fetchData();
  }, [searchTerm, data.data]);

  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
        Search by title
      </h2>
      <form>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          name="search"
          defaultValue={searchTerm}
          className="input my-2"
          required
          placeholder="Search"
        />
      </form>

      <div className="overflow-x-auto">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <colgroup>
            <col className="w-5" />
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-5" />
          </colgroup>
          <thead>
            <tr className="dark:bg-gray-300">
              <th className="p-3">Serial</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Marathon title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Marathon Start Date</th>
              <th className="p-3">Additional Info</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {registrationData.map((el, index) => (
              <Rows
                key={el._id}
                el={el}
                registrationData={registrationData}
                setRegistrationData={setRegistrationData}
                index={index}
              ></Rows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyList;
