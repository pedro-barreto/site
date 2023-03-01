import { Link } from "react-router-dom";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className="col-span-2 w-full text-center border border-black">
      <h3 className="text-2xl my-4 font-bold">{tituloAside}</h3>
      <ul>
        {arrLinks.map((index) => (
          <li key={index.nome} className="text-xl py-7 hover:bg-gray-400 hover:text-white">
            <Link to={index.url}>{index["nome"]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
