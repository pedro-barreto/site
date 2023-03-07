import { Link } from "react-router-dom";
import FaleConosco from "../components/FaleConosco";

export default function Sobre() {
  return (
    <div className=" bg-cor3 pb-28 pt-14 dark:bg-gray-600 p-2 sm:p-14">
      <h1 className="text-center pb-14 text-4xl font-bold dark:text-gray-300">
        SOBRE NOSSA EMPRESA!
      </h1>
      <div className="w-full aspect-video flex justify-end items-center max-h-fmh text-gray-300 p-5 space-y-5 lg:bg-about1 filter opacity-95 rounded-xl">
        <div className="lg:w-1/2 bg-gray-700 p-4 sm:p-14 rounded-md filter lg:opacity-80">
          <h1 className="text-gray-100 text-3xl font-bold">
            Lorem ipsum dolor, sit amet Lorem ipsum elit. Sit, autem?
          </h1>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <div className="flex flex-wrap justify-around">
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 1
            </Link>
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 2
            </Link>
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 3
            </Link>
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 4
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full aspect-video flex items-center max-h-fmh text-gray-300 p-5 space-y-5 lg:bg-about2 filter opacity-95 mt-28 rounded-xl">
        <div className="lg:w-1/2 bg-gray-700 p-4 sm:p-14 rounded-md filter lg:opacity-80">
          <h1 className="text-gray-100 text-3xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            earum numquam dolorem iure reiciendis, error esse fugiat quo,
            exercitationem provident quia eos maxime similique asperiores
            veritatis fuga! Autem placeat veritatis natus quam nulla.
          </p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <div className="flex flex-wrap justify-around">
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 1
            </Link>
            <Link
              to="/site/sobre"
              className="text-blue-800 hover:underline bg-gray-300 px-4 py-2 font-semibold rounded-md m-1"
            >
              Link 2
            </Link>
          </div>
        </div>
      </div>
      <FaleConosco />
    </div>
  );
}
