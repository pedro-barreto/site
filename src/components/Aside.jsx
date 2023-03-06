import { Link } from "react-router-dom";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className="col-span-2 bg-cor1 border-r-2 border-black 2xl:border 2xl:border-gray-400 hidden sm:flex">
      <ul className="w-full text-center">
        <h3 className="text-2xl p-3 font-bold text-gray-700">{tituloAside}</h3>
        <hr className="border-black" />
        {arrLinks.map((index) => (
          <li
            key={index.nome}
            className="text-xl py-7 font-semibold text-gray-600 hover:text-gray-200 hover:bg-gray-400 transition duration-300"
          >
            <Link to={index.url}>{index["nome"]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
