import { Aside } from "../components/index";
import styles from "../styles/pages/Animes.module.scss";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div className={styles.animes}>
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <h1>Animes</h1>
        </div>
      </div>
    </div>
  );
}
