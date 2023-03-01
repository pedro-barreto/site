import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="box-content h-28 w-full max-w-screen-2xl grid grid-cols-12 fixed top-0 bg-white border border-black z-50">
      <Link to="/site/" className="flex justify-center py-3 h-28 col-span-2">
        <img src={Logo} alt="logo" className="h-full" />
      </Link>
      <nav className="h-28 col-span-10">
        <ul className="h-full flex">
          <li className="w-full h-full hover:bg-gray-400 hover:text-white">
            <Link
              to="/site/"
              className="w-full h-full grid place-items-center "
            >
              HOME
            </Link>
          </li>
          <li className="w-full h-full hover:bg-gray-400 hover:text-white">
            <Link
              to="/site/animes"
              className="w-full h-full grid place-items-center"
            >
              ANIMES
            </Link>
          </li>
          <li className="w-full h-full hover:bg-gray-400 hover:text-white">
            <Link
              to="/site/artes"
              className="w-full h-full grid place-items-center"
            >
              ARTES
            </Link>
          </li>
          <li className="w-full h-full hover:bg-gray-400 hover:text-white">
            <Link
              to="/site/sobre"
              className="w-full h-full grid place-items-center hover:bg-gray-400 hover:text-white"
            >
              SOBRE
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
