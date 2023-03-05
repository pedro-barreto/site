import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <header className="h-28 w-full max-w-screen-2xl grid grid-cols-12 fixed top-0 bg-cor1 font-nippo z-50 2xl:border 2xl:border-gray-400">
      <Link
        to="/site"
        className="flex justify-center py-3 h-28 col-span-6 sm:col-span-2 "
      >
        <img src={Logo} alt="logo" className="h-full object-cover" />
      </Link>
      <nav className="h-full col-span-10 font-bold text-xl text-gray-200 hidden sm:flex">
        <Link
          to="/site"
          className="w-full h-full grid place-items-center hover:bg-gray-500 transition duration-300"
        >
          HOME
        </Link>

        <Link
          to="/site/animes"
          className="w-full h-full grid place-items-center hover:bg-gray-500 transition duration-300"
        >
          ANIMES
        </Link>

        <Link
          to="/site/artes"
          className="w-full h-full grid place-items-center hover:bg-gray-500 transition duration-300"
        >
          ARTES
        </Link>

        <Link
          to="/site/sobre"
          className="w-full h-full grid place-items-center hover:bg-gray-500 transition duration-300"
        >
          SOBRE
        </Link>
      </nav>
      <nav className="col-span-6">
        <div
          id="hamburguer"
          className="grid place-items-center h-full text-7xl text-gray-500 sm:hidden"
        >
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}
