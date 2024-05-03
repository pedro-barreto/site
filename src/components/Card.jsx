import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import PropTypes from "prop-types";

export default function Card({ titulo, texto, imagem }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <article className="max-w-card h-fit m-5 bg-cor5 rounded-xl overflow-hidden shadow-xl border border-black black:border-white dark:bg-red-900">
      <img className="w-full aspect-square object-cover" src={imagem} alt="" />

      <div className="p-2 sm:p-5 h-auto text-gray-300">
        <button
          className="flex justify-center items-center w-full space-x-1"
          onClick={handleClick}
        >
          {card ? (
            <FiArrowUp className="text-xl sm:text-2xl" />
          ) : (
            <FiArrowDown className="text-xl sm:text-2xl" />
          )}

          <h5 className="text-lg sm:text-xl font-bold">{titulo}</h5>
        </button>
        <p className={card ? "text-center text-sm sm:text-base p-2" : "hidden"}>
          {texto}
        </p>
      </div>
    </article>
  );
}

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};
