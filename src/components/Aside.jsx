import { Link } from "react-router-dom";

export default function Aside({ tituloAside, arrLinks }) {
  return (
    <aside className="col-span-2 bg-cor1 border-r border-black 2xl:border hidden sm:flex dark:bg-gray-700 dark:border-white">
      <ul className="w-full text-center text-gray-700 dark:text-gray-300">
        <h3 className="text-2xl p-3 font-bold">{tituloAside}</h3>
        <hr className="border-black dark:border-white" />
        {arrLinks.map((index) => (
          <li
            key={index.nome}
            className="text-xl py-7 font-semibold hover:text-gray-200 hover:bg-gray-400 transition duration-300 dark:hover:bg-gray-400"
          >
            <Link to={index.url}>{index["nome"]}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
