import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmail, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    e.target.reset();
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registerd",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto my-20 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-neutral">
            Sign In with google
          </button>
          <p>
            Don't have an account? <Link to={"/register"}>Please Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
