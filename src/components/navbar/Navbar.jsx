import { NavLink } from "react-router";
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

  return (
    <nav className="navbar font-secondary bg-neutral text-neutral-content opacity-85 px-2 lg:px-10 sticky top-0 z-10">
      <div className="flex-1">
        <h1 className="text-2xl lg:text-4xl text-primary">MilesMatter</h1>
      </div>
      <div className="flex items-center">
        <ul className="menu menu-horizontal px-1 tracking-wider md:space-x-1.5 text-lg flex flex-col md:flex-row">
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
              to={"/about_us"}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              About Us
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
              <button className="btn bg-primary text-primary-content text-xl tracking-wider font-normal mb-1">
                <NavLink to={"/login"}>Login</NavLink>
              </button>
              <button className="btn bg-primary text-primary-content text-xl tracking-wider font-normal">
                <NavLink to={"/register"}>Register</NavLink>
              </button>
            </>
          )}
        </ul>

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
              className="btn bg-primary text-black text-xl font-normal tracking-wider border-none outline-0 "
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
