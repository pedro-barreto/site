import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Card({ titulo, texto, imagem }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <div
      className="w-64 h-fit m-5 bg-cor5 rounded-lg cursor-pointer"
      onClick={() => handleClick()}
    >
      <img
        className="w-full rounded-t-lg aspect-square object-cover"
        src={imagem}
        alt="Card"
      />
      <div className="p-5 h-auto">
        <div className="flex justify-center items-center text-black">
          {card ? (
            <FiArrowUp className="text-2xl mr-2 relative bottom-1" />
          ) : (
            <FiArrowDown className="text-2xl mr-2 relative bottom-1" />
          )}

          <h5 className="mb-2 text-2xl font-bold">{titulo}</h5>
        </div>
        <p
          className={
            card ? "mb-3 font-semibold text-gray-100 text-center" : "hidden"
          }
        >
          {texto}
        </p>
      </div>
    </div>
  );
}
