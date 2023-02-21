import { useEffect, useState } from "react";
import Aside from "../../components/Aside";
import styles from "../../styles/Animes.module.scss";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/animes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setAnimes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.animes}>
      <Aside tituloAside={"Animes"} arrLinks={links} />

      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <h1>Animes</h1>
        </div>

        <form action="cadastrar">
          <label>Nome</label>
          <input type="text" placeholder="Nome do anime..." />
          <label>Sinopse</label>
          <input type="text" placeholder="Sinopse do anime" />
          <input type="submit" value="Cadastrar" />
        </form>
        
        <div className={styles.exibirAnimes}>
          {animes.map((index) => (
            <div className={styles.card} key={index.codigo}>
              <img src="https://via.placeholder.com/500" alt="Card anime" />
              <h3>{index.nome}</h3>
              <p>{index.sinopse}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
