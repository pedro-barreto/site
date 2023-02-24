import Aside from "../../components/Aside";
import Formulario from "./Formulario";
import styles from "../../styles/animes/Animes.module.scss";

const links = [
  { nome: "Link 1", url: "" },
  { nome: "Link 2", url: "" },
];

export default function Jogos() {
  return (
    <div className={styles.animes}>
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <h1>Animes</h1>
        </div>
        <Formulario />
        <section></section>
      </div>
    </div>
  );
}
