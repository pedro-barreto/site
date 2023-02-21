import styles from "../../styles/home/Card.module.scss";
import { FaChevronDown } from "react-icons/fa";

export default function cartao({ titulo, texto, imagem }) {
  return (
    <div className={styles.card}>
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
