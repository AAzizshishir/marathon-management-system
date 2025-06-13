import { use } from "react";

const ApplyList = ({ registrationPromise }) => {
  const data = use(registrationPromise);
  console.log(data.data);
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
              <th className="p-3">Serial</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Marathon title</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Additional Info</th>
              <th className="p-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
            {data.data.map((el, index) => (
              <tr key={el._id}>
                <td className="px-3 py-2">
                  <p>{index + 1}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{el.firstName}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{el.lastName}</p>
                </td>
                <td className="px-3 py-2">
                  {/* <span>UI Designer</span> */}
                  <p className="dark:text-gray-600">{el.title}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{el.contactNumber}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{el.email}</p>
                </td>
                <td className="px-3 py-2">
                  <p>{el.additionalInfo}</p>
                  {/* <p className="dark:text-gray-600">United Kingdom</p> */}
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    title="Open details"
                    className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplyList;
