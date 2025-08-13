import useAuth from "../../hooks/useAuth";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router";
import Links from "../Links/Links";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="navbar bg-black sticky top-0 left-0 z-50 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow text-white"
          >
            <Links />
          </ul>
        </div>
        <Link to={"/"} className="text-2xl lg:text-4xl text-primary">
          MilesMatter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex flex-col lg:flex-row gap-2 text-lg font-medium text-white">
          <Links />
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={user?.photoURL}
              alt="Aveter"
              title={user?.email}
            />
            <button
              onClick={handleLogout}
              className="btn bg-primary text-black text-lg"
            >
              <FaSignOutAlt className="inline mr-1" /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
