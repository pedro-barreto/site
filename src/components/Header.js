import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="https://styles.redditmedia.com/t5_quz5p/styles/profileIcon_eq31ro3kejw11.jpg?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=7089cc5f089b78916ee824dbae601e9a9e04e031"
          alt="Logo"
        />
      </Link>

      <div className="navegacao">
        <ul>
          <Link to="/site/">
            <li>Home</li>
          </Link>
          <Link to="/site/jogos">
            <li>Jogos</li>
          </Link>
          <Link to="/site/acessorios">
            <li>Acessórios</li>
          </Link>
          <Link to="/site/sobre">
            <li>Sobre nós</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
