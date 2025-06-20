import { useState } from "react";
import DatePicker from "react-datepicker";
import { handleDelete, handleEditData } from "../../utils/Utils";

const MarathonRows = ({ marathonData, marathonsData, setMarathonsData }) => {
  const [regiStart, setRegiStart] = useState(new Date());
  const [regiEnd, setRegiEnd] = useState(new Date());
  const [marathonStart, setMarathonStart] = useState(new Date());
  const {
    _id,
    image,
    title,
    startRegistrationDate,
    endRegistrationDate,
    marathonStartDate,
    location,
    distance,
    description,
  } = marathonData;

  return (
    <tr>
      <td className="px-3 text-2xl font-medium dark:text-gray-600">
        <img
          className="w-12 h-9 rounded-full object-cover"
          src={image}
          alt=""
        />
      </td>
      <td className="px-3 py-2">
        <p>{title}</p>
      </td>
      <td className="px-3 py-2">
        <p className="dark:text-gray-600">{startRegistrationDate}</p>
      </td>
      <td className="px-3 py-2">
        <p>{endRegistrationDate}</p>
      </td>
      <td className="px-3 py-2">
        <p>{marathonStartDate}</p>
      </td>
      <td className="px-3 py-2">
        <p>{location}</p>
      </td>
      <td className="px-3 py-2">
        <p>{distance}</p>
      </td>
      <td className="px-3 py-2">
        <p>{description}</p>
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
                  url: "http://localhost:3000/allMarathons",
                  data: marathonsData,
                  setFn: setMarathonsData,
                })
              }
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 ">
                <div className="grid grid-cols-1 col-span-full space-y-2">
                  <div className="flex flex-col">
                    <label className="text-sm">Image</label>
                    <input
                      type="url"
                      name="Image"
                      defaultValue={image}
                      className="rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Marathon Title</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={title}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Registration Start Date</label>
                    <DatePicker
                      selected={regiStart}
                      name="startRegistrationDate"
                      onChange={(date) => setRegiStart(date)}
                      className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Registration End Date</label>
                    <DatePicker
                      selected={regiEnd}
                      name="endRegistrationDate"
                      onChange={(date) => setRegiEnd(date)}
                      className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm">Marathon Start Date</label>
                    <DatePicker
                      selected={marathonStart}
                      name="marathonStartDate"
                      onChange={(date) => setMarathonStart(date)}
                      className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col">
                    <label className="text-sm">Location</label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={location}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>
                  {/* Distance */}
                  <div className="flex flex-col">
                    <label className="text-sm">Distance</label>
                    <select
                      className="w-full rounded-md px-2 py-0.5 border border-gray-500"
                      name="distance"
                    >
                      <option default>Choose Distance</option>
                      <option value="25k">25k</option>
                      <option value="10k">10k</option>
                      <option value="3k">3k</option>
                    </select>
                  </div>
                  {/* Description */}
                  <div className="flex flex-col">
                    <label className="text-sm">Description</label>
                    <input
                      type="text"
                      name="description"
                      defaultValue={description}
                      className=" rounded-md px-2 py-0.5 border border-gray-500"
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider"
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
          className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider"
          onClick={() =>
            handleDelete({
              id: _id,
              url: "http://localhost:3000/allMarathons",
              data: marathonsData,
              setFn: setMarathonsData,
            })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MarathonRows;
