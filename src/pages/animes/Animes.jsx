import Aside from "../../components/Aside";
import styles from "../../styles/Animes.module.scss";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div className={styles.animes}>
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className={styles.conteudo}>
        <h1>Animes</h1>
      </div>
    </div>
  );
}
