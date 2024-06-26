import PropTypes from "prop-types";
import { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Card({ titulo, texto, imagem }) {
  const [card, setCard] = useState(false);

  const handleClick = () => {
    setCard(!card);
  };

  return (
    <article
      data-aos="fade-up"
      className="max-w-card h-fit m-5 bg-cor5 rounded-xl shadow-xl border border-black black:border-white dark:bg-red-900"
    >
      <img className="w-full aspect-square object-cover" src={imagem} alt="" />

      <div className="p-2 sm:p-5 h-auto text-white">
        <button
          className="flex items-center justify-between w-full"
          onClick={handleClick}
        >
          <h5 className="text-lg sm:text-xl font-bold">{titulo}</h5>
          {card ? (
            <FiArrowUp className="text-xl sm:text-2xl" />
          ) : (
            <FiArrowDown className="text-xl sm:text-2xl" />
          )}
        </button>
        <p
          className={card ? "text-justify text-sm sm:text-base p-2" : "hidden"}
        >
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
