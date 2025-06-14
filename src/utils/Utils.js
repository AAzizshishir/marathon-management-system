import axios from "axios";
import Swal from "sweetalert2";

export const handleEditData = ({ e, id, url, data, setFn }) => {
  e.preventDefault();

  const formValue = new FormData(e.target);
  const formValueObj = Object.fromEntries(formValue.entries());
  console.log(formValueObj);
  axios
    .put(`${url}/${id}`, formValueObj)
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

      const marathonUpdate = data.map((item) =>
        item._id === id ? { ...item, ...formValueObj } : item
      );
      setFn(marathonUpdate);

      document.getElementById(`my_modal_${id}`).close();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleDelete = ({ id, url, data, setFn }) => {
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
        .delete(`${url}/${id}`)
        .then((res) => {
          console.log(res.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          const remainingList = data.filter((data) => data._id !== id);
          setFn(remainingList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};
