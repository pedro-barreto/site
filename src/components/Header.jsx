import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Header() {
  const corpo = document.body
  const [active, setActive] = useState(false);
  const checkHambur = () => {
    setActive(!active);
    active ? corpo.style.overflowY = 'auto' : corpo.style.overflow = 'hidden'
  };

  return (
    <header className={active ? "hamburguerOpen" : "hamburguerClose"}>
      <Link to="site/" className="logo">
        <img
          src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
          alt="Logo"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="site/">HOME</Link>
          </li>
          <li>
            <Link to="site/jogos">JOGOS</Link>
          </li>
          <li>
            <Link to="site/acessorios">ACESSÓRIOS</Link>
          </li>
          <li>
            <Link to="site/sobre">SOBRE</Link>
          </li>
          <li>
            <Link onClick={checkHambur}>
              <GiHamburgerMenu />
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="hamburguerMenu">
        <ul>
          <li>
            <Link to="site/" onClick={active ? checkHambur : null}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="site/jogos" onClick={active ? checkHambur : null}>
              JOGOS
            </Link>
          </li>
          <li>
            <Link to="site/acessorios" onClick={active ? checkHambur : null}>
              ACESSÓRIOS
            </Link>
          </li>
          <li>
            <Link to="site/sobre" onClick={active ? checkHambur : null}>
              SOBRE
            </Link>
          </li>
          <li>
            <Link onClick={checkHambur}>
              <ImCross />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
