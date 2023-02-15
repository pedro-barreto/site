import "./Card.css";
import { FaArrowDown } from "react-icons/fa";

function Card({ texto, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt="Card" />
      <details>
        <summary>
          <FaArrowDown />
          Titulo-Card
        </summary>
        <p>{texto}</p>
      </details>
    </div>
  );
}

export default Card;
