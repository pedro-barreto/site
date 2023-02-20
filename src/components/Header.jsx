import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

export default function Header() {
  const corpo = document.body;
  const [active, setActive] = useState(false);
  const [ajuste, setAjuste] = useState(false);
  const [link, setLink] = useState(1);

  const checkHambur = () => {
    setActive(!active);
    setAjuste(true);
    active
      ? (corpo.style.overflowY = "auto")
      : (corpo.style.overflowY = "hidden");
  };

  const checkNav = (e) => {
    setLink(e);
  };

  return (
    <header
      className={
        ajuste ? (active ? styles.hamburguerOpen : styles.hamburguerClose) : null
      }
    >
      <Link to="/site/" className={styles.logo} onClick={() => checkNav(1)}>
        <img
          src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
          alt="Logo"
        />
      </Link>
      <nav>
        <ul>
          <li
            className={link === 1 ? styles.navActive : null}
            onClick={() => checkNav(1)}
          >
            <Link to="/site/">HOME</Link>
          </li>
          <li
            className={link === 2 ? styles.navActive : null}
            onClick={() => checkNav(2)}
          >
            <Link to="/site/jogos">ANIMES</Link>
          </li>
          <li
            className={link === 3 ? styles.navActive : null}
            onClick={() => checkNav(3)}
          >
            <Link to="/site/acessorios">ARTES</Link>
          </li>
          <li
            className={link === 4 ? styles.navActive : null}
            onClick={() => checkNav(4)}
          >
            <Link to="/site/sobre">SOBRE</Link>
          </li>
          <li>
            <Link onClick={checkHambur}>
              <GiHamburgerMenu />
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.hamburguerMenu}>
        <ul>
          <li>
            <Link to="/site/" onClick={active ? checkHambur : null}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/site/jogos" onClick={active ? checkHambur : null}>
              ANIMES
            </Link>
          </li>
          <li>
            <Link to="/site/acessorios" onClick={active ? checkHambur : null}>
              ARTES
            </Link>
          </li>
          <li>
            <Link to="/site/sobre" onClick={active ? checkHambur : null}>
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
