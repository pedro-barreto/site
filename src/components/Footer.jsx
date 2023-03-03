import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="h-28 p-5 bg-cor1 text-white flex flex-col justify-center items-center font-bold">
      <div>
        <Link
          to={"https://github.com/pedro-barreto"}
          target={"_blank"}
          className="flex py-5 transition ease-linear hover:scale-125"
        >
          <AiFillGithub className="text-2xl mx-1" />
          <span>Github</span>
        </Link>
      </div>
      <p className="text-lg pb-5">
        Site desenvolvido por Pedro B. &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
