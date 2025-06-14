import { use, useState } from "react";
import MarathonRows from "./MarathonRows";

const MarathonList = ({ marathonsPromise }) => {
  const marathonList = use(marathonsPromise);
  //   console.log(marathonList.data);
  const [marathonsData, setMarathonsData] = useState(marathonList.data);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Contacts</h2>
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
              <th className="p-3">Photo</th>
              <th className="p-3">Title</th>
              <th className="p-3">Start Registration Date</th>
              <th className="p-3">End Registration Date</th>
              <th className="p-3">Marathon Start Date</th>
              <th className="p-3">Location</th>
              <th className="p-3">Distance</th>
              <th className="p-3">Description</th>
              <th className="p-3">Edit</th>
              <th className="p-3">Delete</th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {marathonsData.map((marathonData) => (
              <MarathonRows
                key={marathonData._id}
                marathonData={marathonData}
                marathonsData={marathonsData}
                setMarathonsData={setMarathonsData}
              ></MarathonRows>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarathonList;
