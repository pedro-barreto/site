import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="h-28 w-full max-w-screen-2xl grid grid-cols-12 fixed top-0 bg-cor1 font-nippo z-50 ">
      <Link to="/site/" className="flex justify-center py-3 h-28 col-span-2 ">
        <img src={Logo} alt="logo" className="h-full" />
      </Link>
      <nav className="flex h-full col-span-10 font-bold text-xl text-white">
        <Link
          to="/site/"
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
    </header>
  );
}
