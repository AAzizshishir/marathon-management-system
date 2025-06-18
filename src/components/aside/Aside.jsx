import { NavLink } from "react-router";

const Aside = () => {
  return (
    <ul>
      <li>
        <NavLink
          to={"addmarathon"}
          className={({ isActive }) => (isActive ? "link" : "")}
        >
          Add Marathon
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"marathonlist"}
          className={({ isActive }) => (isActive ? "link" : "")}
        >
          My Marathon List
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"applylist"}
          className={({ isActive }) => (isActive ? "link" : "")}
        >
          My Apply List
        </NavLink>
      </li>
    </ul>
  );
};

export default Aside;
