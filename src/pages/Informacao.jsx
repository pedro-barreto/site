import styles from "../styles/pages/Informacao.module.scss";

export default function Informacao({ titulo, link }) {
  return (
    <>
      <div className={styles.informacao}>
        <div className={styles.texto}>
          <h2>{titulo}</h2>
          <hr />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            assumenda possimus exercitationem autem perferendis nostrum itaque
            rerum consequatur totam minus accusamus vero eveniet libero incidunt
            placeat necessitatibus, sapiente nam iste quia? Ducimus sunt quae,
            velit maiores quasi ad accusamus labore eaque nulla sapiente,
            nostrum repellat itaque! Hic nisi nemo beatae quo rem voluptatem
            sapiente velit nesciunt quae, et ut sint eveniet dolore eius modi
            sequi ad qui error quis. Magnam minima, nesciunt ipsa placeat id et
            eveniet laboriosam ipsum enim assumenda cum fugiat repellat illum
            iure itaque, laudantium consectetur ad molestias est non?
          </p>
        </div>
        <div className={styles.imagem}>
          <img src={link} alt="Imagem" />
        </div>
      </div>
      <hr />
    </>
  );
}
