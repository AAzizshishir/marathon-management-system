import { NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Links = () => {
  const { user } = useAuth();
  return (
    <>
      <li className="hover:text-primary">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          to={"/marathon"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Marathon
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          to={"/about_us"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          About Us
        </NavLink>
      </li>
      <li className="hover:text-primary">
        <NavLink
          to={"/contact_us"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Contact Us
        </NavLink>
      </li>
      {user ? (
        <li className="hover:text-primary">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Dashboard
          </NavLink>
        </li>
      ) : (
        <>
          <li>
            <button className="btn bg-primary text-primary-content text-xl tracking-wider font-normal mb-1">
              <NavLink to={"/login"}>Login</NavLink>
            </button>
          </li>
          <li>
            <button className="btn bg-primary text-primary-content text-xl tracking-wider font-normal">
              <NavLink to={"/register"}>Register</NavLink>
            </button>
          </li>
        </>
      )}
    </>
  );
};

export default Links;
