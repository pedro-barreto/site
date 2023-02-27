import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/components/Header.module.scss";

export default function Header() {
  const corpo = document.body;
  const [active, setActive] = useState(false);
  const [ajuste, setAjuste] = useState(false);

  const checkHambur = () => {
    setActive(!active);
    setAjuste(true);
    active
      ? (corpo.style.overflowY = "auto")
      : (corpo.style.overflowY = "hidden");
  };
  return (
    <>
      <div className={styles.ajusteHeader}></div>
      <header
        className={
          ajuste
            ? active
              ? styles.hamburguerOpen
              : styles.hamburguerClose
            : null
        }
      >
        <Link to="/site/" className={styles.logo}>
          <img
            src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
            alt="Logo"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/site/">HOME</Link>
            </li>
            <li>
              <Link to="/site/animes">ANIMES</Link>
            </li>
            <li>
              <Link to="/site/artes">ARTES</Link>
            </li>
            <li>
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
              <Link to="/site/animes" onClick={active ? checkHambur : null}>
                ANIMES
              </Link>
            </li>
            <li>
              <Link to="/site/artes" onClick={active ? checkHambur : null}>
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
    </>
  );
}
