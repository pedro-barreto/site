import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to={"/"}>
            <FaTwitter />
            Twitter
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaInstagram />
            Instagram
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaGoogle />
            E-mail
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaLinkedin />
            Linkedin
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaFacebook />
            Facebook
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaGithub />
            Github
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <FaWhatsapp />
            Whatsapp
          </Link>
        </li>
      </ul>
      <p>Site desenvolvido por Pedro B. - {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
