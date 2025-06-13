// import { useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

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
  const handleEditData = (e, id) => {
    e.preventDefault();
    const formValue = new FormData(e.target);
    const formValueObj = Object.fromEntries(formValue.entries());
    console.log(formValueObj);
    axios
      .put(`http://localhost:3000/registration/${id}`, formValueObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        const updatedData = registrationData.map((item) =>
          item._id === id ? { ...item, ...formValueObj } : item
        );

        setRegistrationData(updatedData);
        document.getElementById(`my_modal_${id}`).close();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/registration/${id}`)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });

            const remainingList = registrationData.filter(
              (data) => data._id !== id
            );
            setRegistrationData(remainingList);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
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
        {/* <button
          type="button"
          title="Open details"
          className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300"
        >
          Edit
        </button> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
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
            <form method="dialog" onSubmit={(e) => handleEditData(e, _id)}>
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
        <button onClick={() => handleDelete(_id)} type="button" className="btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Rows;
