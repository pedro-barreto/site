import { Aside } from "../components/index";
import styles from "../styles/pages/Artes.module.scss";

export default function Acessorios() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
  ];

  return (
    <div className={styles.artes}>
      <Aside tituloAside={"Artes"} arrLinks={links} />
      <div className={styles.conteudo}>
        <h1>Artes</h1>
      </div>
    </div>
  );
}
