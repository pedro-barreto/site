import "./Cartao.css";
import { FaChevronDown } from "react-icons/fa";

export default function cartao({ titulo, texto, imagem }) {
  return (
    <div className="cartao">
      <details>
        <summary>
          <img src={imagem} alt="cartao" />
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
