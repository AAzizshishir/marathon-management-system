import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signUpWithEmail } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.target);
    const { name, email, password, photourl } = Object.fromEntries(
      formValue.entries()
    );
    signUpWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
    e.target.reset();
  };
  return (
    <div className="card bg-base-100 w-full mx-auto my-20 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photourl"
            className="input"
            placeholder="Photo"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <p>
            Already have an account? <Link to={"/login"}>Please login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
