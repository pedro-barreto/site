import styles from "./Footer.module.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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
