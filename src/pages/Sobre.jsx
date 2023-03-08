import { Link } from "react-router-dom";
import FaleConosco from "../components/FaleConosco";

export default function Sobre() {
  const linkStyle =
    "text-blue-800 transition duration-300 hover:bg-blue-800 hover:text-gray-300 bg-gray-300 px-2 py-1 sm:px-4 sm:py-2 grid place-items-center font-semibold rounded-md m-1";

  return (
    <div className=" bg-cor3 py-8 sm:p-14 dark:bg-gray-600 ">
      <h1 className="text-center pb-8 sm:pb-14 text-4xl sm:text-5xl font-bold font-nippo dark:text-gray-300">
        SOBRE NOSSA EMPRESA!
      </h1>
      <div className="w-full aspect-video flex justify-end items-center max-h-fmh text-gray-300 p-5 pt-0 space-y-5 lg:bg-about1 filter opacity-95 rounded-xl border border-white">
        <div className="lg:w-1/2 bg-gray-700 p-4 sm:p-14 rounded-md filter lg:opacity-80">
          <h1 className="text-gray-100 text-2xl sm:text-3xl font-bold">
            Lorem ipsum dolor, sit amet Lorem ipsum elit. Sit, autem?
          </h1>
          <p className="my-5 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <div className="flex flex-wrap justify-around">
            <Link to="/site/sobre" className={linkStyle}>
              Link 1
            </Link>
            <Link to="/site/sobre" className={linkStyle}>
              Link 2
            </Link>
            <Link to="/site/sobre" className={linkStyle}>
              Link 3
            </Link>
            <Link to="/site/sobre" className={linkStyle}>
              Link 4
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full aspect-video flex items-center max-h-fmh text-gray-300 p-5 pt-0 space-y-5 lg:bg-about2 filter opacity-95 mt-10 sm:mt-28 rounded-xl border border-white">
        <div className="lg:w-1/2 bg-gray-700 p-4 sm:p-14 rounded-md filter lg:opacity-80">
          <h1 className="text-gray-100 text-2xl sm:text-3xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="my-5 text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            earum numquam dolorem iure reiciendis, error esse fugiat quo,
            exercitationem provident quia eos maxime similique asperiores
            veritatis fuga! Autem placeat veritatis natus quam nulla.
          </p>
          <p className="my-5 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <div className="flex flex-wrap justify-around">
            <Link to="/site/sobre" className={linkStyle}>
              Link 1
            </Link>
            <Link to="/site/sobre" className={linkStyle}>
              Link 2
            </Link>
          </div>
        </div>
      </div>
      <FaleConosco />
    </div>
  );
}
