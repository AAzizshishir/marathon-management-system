import { handleDelete, handleEditData } from "../../utils/Utils";

const Rows = ({ el, index, registrationData, setRegistrationData }) => {
  const {
    _id,
    firstName,
    lastName,
    title,
    contactNumber,
    email,
    additionalInfo,
    marathonStartDate,
  } = el;

  return (
    <tr>
      <td className="px-3 py-2">
        <p>{index + 1}</p>
      </td>
      <td className="px-3 py-2">
        <p>{firstName}</p>
      </td>
      <td className="px-3 py-2">
        <p>{lastName}</p>
      </td>
      <td className="px-3 py-2">
        <p>{title}</p>
        {/* className="dark:text-gray-600" */}
      </td>
      <td className="px-3 py-2">
        <p>{contactNumber}</p>
      </td>
      <td className="px-3 py-2">
        <p>{email}</p>
      </td>
      <td className="px-3 py-2">
        <p>{marathonStartDate}</p>
      </td>
      <td className="px-3 py-2">
        <p>{additionalInfo}</p>
      </td>
      <td className="px-3 py-2">
        <button
          className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider"
          onClick={() => document.getElementById(`my_modal_${_id}`).showModal()}
        >
          Edit
        </button>
        <dialog id={`my_modal_${_id}`} className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              method="dialog"
              onSubmit={(e) =>
                handleEditData({
                  e,
                  id: _id,
                  url: "http://localhost:3000/registration",
                  data: registrationData,
                  setFn: setRegistrationData,
                })
              }
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 ">
                <div className="grid grid-cols-1 col-span-full space-y-2">
                  <div className="flex flex-col">
                    <label className="text-sm">Email</label>
                    <input
                      type="text"
                      name="email"
                      defaultValue={email}
                      readOnly
                      className="rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Marathon Title</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      readOnly
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Marathon Start Date</label>
                    <input
                      type="text"
                      name="marathonStartDate"
                      defaultValue={marathonStartDate}
                      readOnly
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  {/* First Name */}
                  <div className="flex flex-col">
                    <label className="text-sm">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      defaultValue={firstName}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="flex flex-col">
                    <label className="text-sm">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      defaultValue={lastName}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  {/* Contact Number */}
                  <div className="flex flex-col">
                    <label className="text-sm">Contact Number</label>
                    <input
                      type="number"
                      name="contactNumber"
                      defaultValue={contactNumber}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  {/* Additional Info  */}
                  <div className="flex flex-col">
                    <label className="text-sm"> Additional Info </label>
                    <input
                      type="text"
                      name="additionalInfo"
                      defaultValue={additionalInfo}
                      className="rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary rounded-lg my-2"
                    value="Update"
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </dialog>
      </td>
      <td>
        <button
          onClick={() =>
            handleDelete({
              id: _id,
              url: "http://localhost:3000/registration",
              data: registrationData,
              setFn: setRegistrationData,
            })
          }
          type="button"
          className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Rows;
