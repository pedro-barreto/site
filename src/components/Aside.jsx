import { Link } from "react-router-dom";
import "./Aside.css";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside>
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
