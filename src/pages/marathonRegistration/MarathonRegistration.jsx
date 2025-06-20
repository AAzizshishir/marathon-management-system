// import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MarathonRegistration = () => {
  const { user } = useAuth();
  const { title, marathonStartDate } = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const handleRegistration = (e) => {
    e.preventDefault();
    const registrationData = new FormData(e.target);
    const registrationDataObj = Object.fromEntries(registrationData.entries());
    registrationDataObj.marathonId = id;

    axios
      .post("http://localhost:3000/registration", registrationDataObj)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successfull",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto my-10">
      <Helmet>
        <title>Marathon Registration</title>
      </Helmet>
      <form
        onSubmit={handleRegistration}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 ">
          <div className="grid grid-cols-1 col-span-full space-y-2">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Email</label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Marathon Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                readOnly
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Marathon Start Date</label>
              <input
                type="text"
                name="marathonStartDate"
                defaultValue={marathonStartDate}
                readOnly
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            {/* First Name */}
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            {/* Last Name */}
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            {/* Contact Number */}
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Contuct Number</label>
              <input
                type="number"
                name="contactNumber"
                placeholder="Contuct Number"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            {/* Additional Info  */}
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm"> Additional Info </label>
              <input
                type="text"
                name="additionalInfo"
                placeholder="Additional Info"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary text-primary-content font-secondary font-normal text-xl tracking-wider rounded-lg my-2"
              value="Register"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default MarathonRegistration;
