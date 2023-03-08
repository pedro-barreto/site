import { Routes, Route, Link } from "react-router-dom";
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

  dark ? (corpo.className = "dark") : (corpo.className = "light");

  const linkNav = `max group sm:grid place-items-center transition duration-300 hover:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500 ${
    hamb ? "grid" : "hidden"
  }`;

  const markRoutes =
    "border-b border-black dark:border-white group-hover:border-gray-200";

  return (
    <header
      className={` w-full max-w-screen-2xl grid fixed top-0 bg-cor1 font-nippo z-10 border-b border-black  2xl:border filter opacity-95 dark:bg-gray-800 dark:border-gray-300 ${
        hamb ? "h-full grid-rows-6" : "h-28 grid-cols-12"
      }`}
    >
      <Link
        to="/site"
        className={`justify-center py-3 h-28 col-span-6 sm:col-span-2 ${
          hamb ? "hidden" : "flex"
        }`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img
          src={Logo}
          alt="logo"
          className={`h-full object-cover duration-300 ${
            dark ? "" : "filter invert"
          }`}
        />
      </Link>
      <nav
        className={`h-full col-span-6 sm:col-span-10 font-bold text-4xl sm:text-xl text-gray-700 dark:text-gray-300 ${
          hamb ? "flex-col" : "flex"
        }`}
      >
        <div
          id="hamburguer"
          className={`max grid place-items-center text-6xl sm:hidden cursor-pointer ${
            hamb
              ? "text-red-500 hover:bg-red-500 hover:text-gray-100 dark:text-red-700 dark:hover:bg-red-700 dark:hover:text-gray-300"
              : "hover:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500"
          }`}
          onClick={() => handleClick()}
        >
          {hamb ? <CgClose className="text-8xl" /> : <GiHamburgerMenu />}
        </div>
        <Link
          to="/site"
          className={linkNav}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          <Routes>
            <Route
              path="/site/"
              element={<span className={markRoutes}>HOME</span>}
            ></Route>
            <Route path="*" element="HOME"></Route>
          </Routes>
        </Link>

        <Link
          to="/site/animes"
          className={linkNav}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          <Routes>
            <Route
              path="/site/animes"
              element={<span className={markRoutes}>ANIMES</span>}
            ></Route>
            <Route path="*" element="ANIMES"></Route>
          </Routes>
        </Link>

        <Link
          to="/site/artes"
          className={linkNav}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          <Routes>
            <Route
              path="/site/artes"
              element={<span className={markRoutes}>ARTES</span>}
            ></Route>
            <Route path="*" element="ARTES"></Route>
          </Routes>
        </Link>

        <Link
          to="/site/sobre"
          className={linkNav}
          onClick={() => {
            setHamb(false);
            window.scrollTo(0, 0);
          }}
        >
          <Routes>
            <Route
              path="/site/sobre"
              element={<span className={markRoutes}>SOBRE</span>}
            ></Route>
            <Route path="*" element="SOBRE"></Route>
          </Routes>
        </Link>
        <div
          className={`max flex items-center hover:text-gray-200 hover:bg-gray-500 transition duration-300 cursor-pointer p-1 ${
            hamb ? "" : "hidden"
          } sm:flex`}
          onClick={() => setDark(!dark)}
        >
          <div className="flex m-auto items-center space-x-2 text-3xl">
            {dark ? (
              <>
                <BsFillSunFill className="text-yellow-200" />
                <p>Light</p>
              </>
            ) : (
              <>
                <BsFillMoonFill />
                <p>Dark</p>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
