import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { signUpWithEmail, updateUserProfile, googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formValue = new FormData(e.target);
    const { name, email, password, photourl } = Object.fromEntries(
      formValue.entries()
    );
    signUpWithEmail(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registerd",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photourl })
          .then(() => {})
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
    e.target.reset();
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Registerd",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
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
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card-body">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Name"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="photourl"
            className="input"
            placeholder="Photo"
            required
          />
          {/* <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          /> */}

          <label className="input validator">
            {/* <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg> */}
            <input
              type="password"
              required
              placeholder="Password"
              minlength="6"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 6 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
          <div className="divider">OR</div>
          <button onClick={handleGoogleSignUp} className="btn btn-neutral">
            Sign Up with google
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
