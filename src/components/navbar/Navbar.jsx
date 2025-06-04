import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/marathon"}>Marathon</NavLink>
      </li>
      {user ? (
        <div className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user?.photoURL}
            alt="Aveter"
          />
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      ) : (
        <>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </>
      )}
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
