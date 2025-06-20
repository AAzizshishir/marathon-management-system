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
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
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
        <h1 className="text-4xl font-bold">Register now!</h1>
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

          <label className="label">Password</label>
          <label className="input validator">
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              minLength="6"
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

          <button
            type="submit"
            className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider mt-4"
          >
            Register
          </button>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignUp}
            className="btn bg-primary text-primary-content font-secondary font-normal text-lg tracking-wider"
          >
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
