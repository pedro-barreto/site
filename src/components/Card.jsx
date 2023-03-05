import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Card({ titulo, texto, imagem, loading }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <div
      className="w-64 h-fit m-5 bg-cor5 rounded-xl overflow-hidden cursor-pointer shadow-xl border border-white"
      onClick={() => handleClick()}
    >
      <img
        className="w-full aspect-square object-cover"
        src={imagem}
        alt="Card"
        loading={loading?"lazy":"eager"}
      />
      <div className="p-5 h-auto">
        <div className="flex justify-center items-center text-gray-200">
          {card ? (
            <FiArrowUp className="text-2xl mr-2 relative bottom-1" />
          ) : (
            <FiArrowDown className="text-2xl mr-2 relative bottom-1" />
          )}

          <h5 className="mb-2 text-2xl font-bold text-gray-200">{titulo}</h5>
        </div>
        <p
          className={
            card ? "mb-3 font-semibold text-gray-300 text-center" : "hidden"
          }
        >
          {texto}
        </p>
      </div>
    </div>
  );
}
