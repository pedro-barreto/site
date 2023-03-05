import { Link } from "react-router-dom";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className="col-span-2 bg-cor1 2xl:border 2xl:border-gray-400 hidden sm:flex">
      <ul className="w-full text-center">
        <h3 className="text-2xl p-3 font-bold text-white border-t border-gray-400">
          {tituloAside}
        </h3>
        <hr className="border-white" />
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
