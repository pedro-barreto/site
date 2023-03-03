import { Link } from "react-router-dom";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className="col-span-2 w-full text-center bg-cor1 border-y border-r border-gray-400 ">
      <h3 className="text-2xl my-4 font-bold text-white">{tituloAside}</h3>
      <hr className="border-white" />
      <ul>
        {arrLinks.map((index) => (
          <li
            key={index.nome}
            className="text-xl py-7 text-gray-100 hover:bg-gray-500 transition duration-300"
          >
            <Link to={index.url}>{index["nome"]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
