import { FaClock, FaStar } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";

export default function CardAnime({ titulo, foto, sinopse, info, tags }) {
  return (
    <div className="max-w-xs bg-cor5 p-4 pt-2 my-5 rounded-xl border border-black dark:border-white dark:bg-red-900">
      <h1 className="h-24 grid place-content-center text-center text-2xl font-black my-2 bg-white text-black rounded-lg dark:bg-gray-700">
        {titulo}
      </h1>

      <div
        className="flex justify-center py-2 w-full"
        style={{ height: "300px" }}
      >
        <img src={foto} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-evenly py-3 text-white">
        <span className="flex items-center gap-1">
          <FaClock /> {info.duracao ?? "erro"}
        </span>
        <span className="flex items-center gap-1">
          <BsCalendarDateFill /> {info.data ?? "erro"}
        </span>
        <span className="flex items-center gap-1">
          <FaStar /> {`${info.avaliacao}/10 ` ?? "erro"}
        </span>
      </div>

      <p className="px-3 py-2 bg-gray-100 text-black font-medium dark:bg-gray-700 dark:text-gray-100 rounded-b">
        {sinopse}
      </p>
    </div>
  );
}
