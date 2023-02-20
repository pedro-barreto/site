import { Link } from "react-router-dom";
import styles from "./Aside.module.css";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className={styles.aside}>
      <h3>{tituloAside}</h3>
      <ul>
        {arrLinks.map((index) => (
          <li key={index["nome"]}>
            <Link to={index["url"]}>{index["nome"]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
