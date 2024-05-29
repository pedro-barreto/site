import { Link, NavLink } from "react-router-dom";
import Logo from "../img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Header() {
  const [hamb, setHamb] = useState(false);
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setHamb(!hamb);
  };

  useEffect(() => {
    const corpo = document.body;
    const scroll = hamb ? "hidden" : "scroll";
    const theme = dark ? "dark" : "light";

    corpo.style.overflowY = scroll;
    corpo.className = theme;
  }, [hamb, dark]);

  const handleNav = () => {
    window.scrollTo(0, 0);
    setHamb(false);
  };

  const navLink = `max group sm:grid place-items-center transition hover:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 ${
    hamb ? "grid" : "hidden"
  }`;

  return (
    <header
      className={` w-full max-w-screen-2xl grid fixed top-0 bg-cor1 font-nippo z-50 border-b border-black  2xl:border filter opacity-95 dark:bg-gray-800 dark:border-gray-300 ${
        hamb ? "h-full grid-rows-6" : "h-28 grid-cols-12"
      }`}
    >
      <Link
        to="/"
        className={`flex justify-center py-3 h-28 col-span-6 sm:col-span-2 ${
          hamb && "hidden"
        }`}
        onClick={handleNav}
      >
        <img
          src={Logo}
          alt="logo"
          className={`h-full object-cover duration-300 ${
            !dark && "filter invert"
          }`}
        />
      </Link>
      <nav
        className={`h-full col-span-6 sm:col-span-10 font-bold text-4xl sm:text-xl text-gray-700 dark:text-gray-300 ${
          hamb ? "flex-col" : "flex"
        }`}
      >
        <button
          className={`max grid place-items-center text-6xl sm:hidden cursor-pointer hover:text-gray-200 ${
            hamb ? "text-red-500 hover:bg-red-500" : " hover:bg-gray-400"
          }`}
          onClick={handleClick}
        >
          {hamb ? <CgClose /> : <GiHamburgerMenu />}
        </button>

        <NavLink to="/" className={navLink} onClick={handleNav}>
          <span>HOME</span>
        </NavLink>
        <NavLink to="/obras" className={navLink} onClick={handleNav}>
          <span>OBRAS</span>
        </NavLink>
        <NavLink to="/artes" className={navLink} onClick={handleNav}>
          <span>ARTES</span>
        </NavLink>
        <NavLink to="/sobre" className={navLink} onClick={handleNav}>
          <span>SOBRE</span>
        </NavLink>

        <button
          className={`max flex sm:flex items-center hover:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 transition duration-300 cursor-pointer p-1 ${
            !hamb && "hidden"
          } `}
          onClick={() => setDark(!dark)}
        >
          <div className="flex m-auto items-center space-x-2 text-3xl">
            {dark ? (
              <>
                <BsFillSunFill className="text-yellow-200" />
                <span>Light</span>
              </>
            ) : (
              <>
                <BsFillMoonFill />
                <span>Dark</span>
              </>
            )}
          </div>
        </button>
      </nav>
    </header>
  );
}
