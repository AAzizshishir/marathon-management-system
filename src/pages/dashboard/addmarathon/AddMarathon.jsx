import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddMarathon = () => {
  const { user } = useAuth();
  const [regiStart, setRegiStart] = useState(new Date());
  const [regiEnd, setRegiEnd] = useState(new Date());
  const [marathonStart, setMarathonStart] = useState(new Date());
  const createdAt = new Date().toLocaleDateString();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.target);
    const formObj = Object.fromEntries(formValue.entries());
    formObj.email = user.email;

    axios
      .post("http://localhost:3000/marathons", formObj)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Marathon Added Successfull",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <Helmet>
        <title>Add Marathon</title>
      </Helmet>
      <form
        noValidate=""
        onSubmit={handleFormSubmit}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 ">
          <div className="grid grid-cols-1 col-span-full space-y-2">
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Marathon Title</label>
              <input
                type="text"
                name="title"
                placeholder="Marathon Title"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="flex gap-6 w-full justify-between">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Start Registration Date</label>
                <br />
                <DatePicker
                  selected={regiStart}
                  name="startRegistrationDate"
                  onChange={(date) => setRegiStart(date)}
                  className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">End Registration Date</label>
                <br />
                <DatePicker
                  selected={regiEnd}
                  name="endRegistrationDate"
                  onChange={(date) => setRegiEnd(date)}
                  className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Marathon Start Date</label>
                <br />
                <DatePicker
                  selected={marathonStart}
                  name="marathonStartDate"
                  onChange={(date) => setMarathonStart(date)}
                  className="w-full rounded-md px-2 py-0.5 border border-gray-500 my-2"
                />
              </div>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Location</label>
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Running Distance</label>
              <br />
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
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Description</label>
              <br />
              <textarea
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
                name="description"
                id=""
                rows={5}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Marathon Image</label>
              <br />
              <input
                type="url"
                name="image"
                id=""
                placeholder="Image"
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <input
                type="hidden"
                name="createdAt"
                value={createdAt}
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Total Registration Count</label>
              <br />
              <input
                readOnly
                type="text"
                name="totalRegistrationCount"
                placeholder="0"
                value={0}
                className="w-full rounded-md px-2 py-0.5 border border-gray-500"
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary rounded-lg my-2"
              value="Submit"
            />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddMarathon;
