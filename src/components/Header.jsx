import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <header>
      <Link to="Site/" className="logo">
        <img
          src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
          alt="Logo"
        />
      </Link>
      <nav>
        <ul>
          <Link to="Site/">
            <li>HOME</li>
          </Link>
          <Link to="Site/jogos">
            <li>JOGOS</li>
          </Link>
          <Link to="Site/acessorios">
            <li>ACESSÓRIOS</li>
          </Link>
          <Link to="Site/sobre">
            <li>SOBRE</li>
          </Link>
          <Link id="hamburguer">
            <li>
              <GiHamburgerMenu />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
