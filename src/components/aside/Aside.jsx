import { NavLink } from "react-router";

const Aside = () => {
  return (
    <ul className="space-y-2 font-secondary font-normal text-xl tracking-wider">
      <li className="hover:text-primary">
        <NavLink
          to={"addmarathon"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Add Marathon
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          to={"marathonlist"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          My Marathon List
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          to={"applylist"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          My Apply List
        </NavLink>
      </li>
    </ul>
  );
};

export default Aside;
