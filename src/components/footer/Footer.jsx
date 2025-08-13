import { Link } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-black opacity-85 text-white p-10">
      <aside>
        <h2 className="text-4xl font-bold">Marathon Management System</h2>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <Link
            to={"https://www.facebook.com/abdul.aziz.shishir.2025"}
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link to={"https://github.com/AAzizshishir"} target="_blank">
            <FaGithub />
          </Link>
          <Link to={"https://www.linkedin.com/in/aashishir/"} target="_blank">
            <FaLinkedin />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
