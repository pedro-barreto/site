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
          <Link>
            <FaTwitter />
            Twitter
          </Link>
        </li>
        <li>
          <Link>
            <FaInstagram />
            Instagram
          </Link>
        </li>
        <li>
          <Link>
            <FaGoogle />
            E-mail
          </Link>
        </li>
        <li>
          <Link>
            <FaLinkedin />
            Linkedin
          </Link>
        </li>
        <li>
          <Link>
            <FaFacebook />
            Facebook
          </Link>
        </li>
        <li>
          <Link>
            <FaGithub />
            Github
          </Link>
        </li>
        <li>
          <Link>
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
