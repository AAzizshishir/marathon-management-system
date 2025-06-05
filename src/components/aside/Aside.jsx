import { NavLink } from "react-router";

const Aside = () => {
  return (
    <ul>
      <li>
        <NavLink to={"addmarathon"}>Add Marathon</NavLink>
      </li>
      <li>
        <NavLink to={"marathonlist"}>My Marathon List</NavLink>
      </li>
      <li>
        <NavLink to={"applylist"}>My Apply List</NavLink>
      </li>
    </ul>
  );
};

export default Aside;
