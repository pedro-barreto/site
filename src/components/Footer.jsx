import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-28 p-5 border border-black text-center">
      <ul>
        <li className="m-auto">
          <Link to={"https://github.com/pedro-barreto"} target={"_blank"}>
            Github
          </Link>
        </li>
      </ul>
      <p>Site desenvolvido por Pedro B. &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
