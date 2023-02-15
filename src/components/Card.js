import "./Card.css";
import { FaChevronDown } from "react-icons/fa";

function Card({ titulo, texto, imagem }) {
  return (
    <div className="card">
      <details>
        <summary>
          <img src={imagem} alt="Card" />
          {
            <p>
              <FaChevronDown />
              {titulo}
            </p>
          }
        </summary>
        <p>{texto}</p>
      </details>
    </div>
  );
}

export default Card;
