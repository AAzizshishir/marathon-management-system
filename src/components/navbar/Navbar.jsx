import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/marathon"}>Marathon</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl">
          Marathon Management System
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
