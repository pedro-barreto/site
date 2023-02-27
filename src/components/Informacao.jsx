import styles from "../styles/components/Informacao.module.scss";

export default function Informacao({ titulo, paragrafo, foto}) {
  return (
    <>
      <div className={styles.informacao}>
        <div className={styles.texto}>
          <h2>{titulo}</h2>
          <hr />
          <p>{paragrafo}</p>
        </div>
        <div className={styles.imagem}>
          <img src={foto} alt="Imagem" />
        </div>
      </div>
      <hr />
    </>
  );
}
