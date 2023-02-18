import { Link } from "react-router-dom";
import "./Aside.css";

export default function Aside({ tituloAside }) {
  const links = [
    { nome: "Link 1", link: "" },
    { nome: "Link 2", link: "" },
    { nome: "Link 3", link: "" },
    { nome: "Link 4", link: "" },
    { nome: "Link 5", link: "" },
  ];
  
  return (
    <>
      <aside>
        <h3>{tituloAside}</h3>
        <ul>
          {links.map((index) => (
            <li key={index.nome}>
              <Link to={index.link}>{index.nome}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
