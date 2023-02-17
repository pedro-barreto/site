import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";

function Header() {
  const body = document.querySelector('body')
  const [active, setActive] = useState(false);
  const checkHambur = () => {
    setActive(!active);
  };

  active?body.style.overflow = 'hidden':body.style.overflow = 'unset'

  return (
    <header className={active ? "hamburguerOpen" : "hamburguerClose"}>
      <Link to="Site/" className="logo">
        <img
          src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
          alt="Logo"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="Site/" onClick={active?checkHambur:""}>HOME</Link>
          </li>
          <li>
            <Link to="Site/jogos" onClick={active?checkHambur:""}>JOGOS</Link>
          </li>
          <li>
            <Link to="Site/acessorios" onClick={active?checkHambur:""}>ACESSÓRIOS</Link>
          </li>
          <li>
            <Link to="Site/sobre" onClick={active?checkHambur:""}>SOBRE</Link>
          </li>
          <li>
            <Link onClick={checkHambur}>
              {active ? <ImCross className="cross" /> : <GiHamburgerMenu />}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
