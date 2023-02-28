import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div></div>
      <header>
        <Link to="/site/">
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
          </ul>
        </nav>
      </header>
    </>
  );
}
