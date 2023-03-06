import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const [hamb, setHamb] = useState(false);
  const [dark, setDark] = useState(false);

  var corpo = document.body;

  const handleClick = () => {
    setHamb(!hamb);
  };

  hamb
    ? (corpo.style.overflowY = "hidden")
    : (corpo.style.overflowY = "scroll");

  return (
    <header
      className={` w-full max-w-screen-2xl grid fixed top-0 bg-cor1 font-nippo z-10 border-b border-black 2xl:border 2xl:border-gray-400 filter opacity-95 ${
        hamb ? "motion-safe:h-full grid-rows-6" : "h-28 grid-cols-12"
      }`}
    >
      <Link
        to="/site"
        className={`justify-center py-3 h-28 col-span-6 sm:col-span-2 ${
          hamb ? "hidden" : "flex"
        }`}
        onClick={() => window.scrollTo(0)}
      >
        <img
          src={Logo}
          alt="logo"
          className="h-full object-cover filter invert"
        />
      </Link>
      <nav
        className={`h-full col-span-6 sm:col-span-10 font-bold text-4xl sm:text-xl text-gray-700 ${
          hamb ? "flex-col" : "flex"
        }`}
      >
        <div
          id="hamburguer"
          className={`max grid place-items-center text-7xl sm:hidden ${
            hamb ? "" : "hover:text-gray-200 hover:bg-gray-400"
          }`}
          onClick={() => handleClick()}
        >
          {hamb ? (
            <CgClose className="w-full h-full text-red-500 hover:bg-red-500 hover:text-gray-100" />
          ) : (
            <GiHamburgerMenu />
          )}
        </div>
        <Link
          to="/site"
          className={`max sm:grid place-items-center hover:text-gray-200 hover:bg-gray-400 transition duration-300 ${
            hamb ? "grid" : "hidden"
          }`}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </Link>

        <Link
          to="/site/animes"
          className={`max sm:grid place-items-center hover:text-gray-200 hover:bg-gray-400 transition duration-300 ${
            hamb ? "grid" : "hidden"
          }`}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          ANIMES
        </Link>

        <Link
          to="/site/artes"
          className={`max sm:grid place-items-center hover:text-gray-200 hover:bg-gray-400 transition duration-300 ${
            hamb ? "grid" : "hidden"
          }`}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          ARTES
        </Link>

        <Link
          to="/site/sobre"
          className={`max sm:grid place-items-center hover:text-gray-200 hover:bg-gray-400 transition duration-300 ${
            hamb ? "grid" : "hidden"
          }`}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          SOBRE
        </Link>
        <div
          className={`max flex items-center hover:text-gray-200 hover:bg-gray-400 transition duration-300 cursor-pointer p-1 ${
            hamb ? "" : "hidden"
          } sm:flex`}
          onClick={() => setDark(!dark)}
        >
          <div className="flex m-auto items-center space-x-2 text-3xl">
            {dark ? (
              <>
                <BsFillMoonFill />
                <p>Dark</p>
              </>
            ) : (
              <>
                <BsFillSunFill />
                <p>Light</p>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
