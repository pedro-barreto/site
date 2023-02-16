import "./Card.css";
import { FaChevronDown } from "react-icons/fa";

function Card({ titulo, texto, imagem }) {
  return (
    <div className="card">
      <details>
        <summary>
          <img src={imagem} alt="Card" />
          <h3>
            <FaChevronDown />
            {titulo}
          </h3>
        </summary>
        <p>{texto}</p>
      </details>
    </div>
  );
}

export default Card;
