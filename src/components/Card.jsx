import { FaChevronDown } from "react-icons/fa";

export default function cartao({ titulo, texto, imagem }) {
  return (
    <div>
      <details>
        <summary>
          <img src={imagem} alt="card" />
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
