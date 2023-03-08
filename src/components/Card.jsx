import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Card({ titulo, texto, imagem, loading }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <div
      className="max-w-card h-fit m-5 bg-cor5 rounded-xl overflow-hidden cursor-pointer shadow-xl border border-black black:border-white dark:bg-red-900"
      onClick={() => handleClick()}
    >
      <img
        className="w-full aspect-square object-cover"
        src={imagem}
        alt="Card"
        loading={loading ? "lazy" : "eager"}
      />
      <div className="p-2 sm:p-5 h-auto text-gray-300">
        <div className="flex justify-center items-center space-x-1">
          {card ? (
            <FiArrowUp className="text-xl sm:text-2xl" />
          ) : (
            <FiArrowDown className="text-xl sm:text-2xl" />
          )}

          <h5 className="text-lg sm:text-xl font-bold">{titulo}</h5>
        </div>
        <p className={card ? "text-center text-sm sm:text-base p-2" : "hidden"}>
          {texto}
        </p>
      </div>
    </div>
  );
}
