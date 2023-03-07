import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Card({ titulo, texto, imagem, loading }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <div
      className="w-64 h-fit m-5 bg-cor5 rounded-xl overflow-hidden cursor-pointer shadow-xl border border-white dark:bg-red-900"
      onClick={() => handleClick()}
    >
      <img
        className="w-full aspect-square object-cover"
        src={imagem}
        alt="Card"
        loading={loading ? "lazy" : "eager"}
      />
      <div className="p-5 h-auto text-gray-300">
        <div className="flex justify-center items-center">
          {card ? (
            <FiArrowUp className="text-2xl mr-2 relative bottom-1" />
          ) : (
            <FiArrowDown className="text-2xl mr-2 relative bottom-1" />
          )}

          <h5 className="mb-2 text-2xl font-bold">{titulo}</h5>
        </div>
        <p className={card ? "mb-3 font-semibold text-center" : "hidden"}>
          {texto}
        </p>
      </div>
    </div>
  );
}
