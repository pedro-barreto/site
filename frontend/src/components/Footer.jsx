import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="h-28 p-5 bg-cor1 text-gray-700 flex flex-col justify-center items-center font-bold border-t border-black 2xl:border dark:bg-gray-800 dark:border-white dark:text-gray-300">
      <div className="transition ease-linear hover:scale-125">
        <Link
          to={"https://github.com/pedro-barreto"}
          target={"_blank"}
          className="flex py-5"
        >
          <AiFillGithub className="text-2xl mx-1" />
          <span>Github</span>
        </Link>
      </div>
      <p className="text-xs sm:text-lg pb-5 duration-300">
        Desenvolvido por Pedro B. &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
