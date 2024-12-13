import logo from "../assets/firstLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2"
          style={{ height: "100px", width: "140px" }}
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <div>
          <a
            href="https://www.linkedin.com/in/abineshsa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/ABINESH174"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaGithub />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/abinesh_s_a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaInstagram></FaInstagram>
          </a>
        </div>
        <div>
          <a
            href="https://x.com/Abinesh_S_A?t=mDSMrIjOz3tLcO9BmiNxvg&s=09"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <FaSquareXTwitter></FaSquareXTwitter>
          </a>
        </div>
        
        
        
      </div>
    </nav>
  );
};

export default Navbar;
