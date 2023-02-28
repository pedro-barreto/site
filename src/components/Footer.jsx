import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to={"https://github.com/pedro-barreto"} target={"_blank"}>
            <FaGithub />
            Github
          </Link>
        </li>
      </ul>
      <p>
        Site desenvolvido por <span title="Opa! 😎👍">Pedro B.</span> &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
