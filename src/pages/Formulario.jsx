import React from "react";
import styles from "../styles/pages/Formulario.module.scss";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nome: "",
      sinopse: "",
      animes: [],
    };
  }

  componentDidMount() {
    this.buscarAnime();
  }

  buscarAnime = () => {
    fetch("http://localhost:5000/animes", { method: "GET" })
      .then((request) => request.json())
      .then((data) => this.setState({ animes: data }))
      .catch((err) => alert("Erro ao exibir animes: " + err));
  };

  deletarAnime = (id) => {
    fetch("http://localhost:5000/animes/" + id, { method: "DELETE" })
      .then((request) => {
        if (request.ok) {
          this.buscarAnime();
        }
      })
      .catch((err) => {
        alert("Erro ao deletar anime: " + err);
      });
  };

  carregarDados = (id) => {
    fetch("http://localhost:5000/animes/" + id, { method: "GET" })
      .then((request) => request.json())
      .then((data) =>
        this.setState({ id: data.id, nome: data.nome, sinopse: data.sinopse })
      )
      .catch((err) => {
        alert("Erro ao resgatar os dados: " + err);
      });
  };

  cadastrarAnime = (anime) => {
    fetch("http://localhost:5000/animes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(anime),
    })
      .then((request) => {
        if (request.ok) {
          this.buscarAnime();
        }
      })
      .catch((err) => {
        alert("Erro ao cadastrar anime: " + err);
      });
  };

  atualizarAnime = (anime) => {
    fetch("http://localhost:5000/animes/" + anime.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(anime),
    })
      .then((request) => {
        if (request.ok) {
          this.buscarAnime();
        }
      })
      .catch((err) => {
        alert("Erro ao cadastrar anime: " + err);
      });
  };

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  atualizaSinopse = (e) => {
    this.setState({
      sinopse: e.target.value,
    });
  };

  submit = () => {
    if (this.state.id === 0) {
      const anime = {
        nome: this.state.nome,
        sinopse: this.state.sinopse,
      };

      this.cadastrarAnime(anime);
    } else {
      const anime = {
        id: this.state.id,
        nome: this.state.nome,
        sinopse: this.state.sinopse,
      };
      this.atualizarAnime(anime);
    }
  };

  reset = () => {
    this.setState({
      id: 0,
      nome: "",
      sinopse: "",
    });
  };

  render = () => {
    return (
      <>
        <form>
          <div className={styles.grupo}>
            <label>ID</label>
            <input type="text" value={this.state.id} disabled={true} />
          </div>
          <div className={styles.grupo}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome do anime..."
              onChange={this.atualizaNome}
              value={this.state.nome}
            />
          </div>
          <div className={styles.grupo}>
            <label>Sinopse</label>
            <input
              type="text"
              placeholder="Sinopse do anime..."
              onChange={this.atualizaSinopse}
              value={this.state.sinopse}
            />
          </div>
          <div className={styles.grupo}>
            <input type="button" value="Cadastrar" onClick={this.submit} />
            <input type="button" value="Limpar" onClick={this.reset} />
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Nome</td>
              <td>Sinopse</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {this.state.animes.map((index) => (
              <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.nome}</td>
                <td>{index.sinopse}</td>
                <td>
                  <MdModeEditOutline
                    color="blue"
                    fontSize={"1.5em"}
                    onClick={() => this.carregarDados(index.id)}
                  />
                  <MdDelete
                    color="red"
                    fontSize={"1.5em"}
                    onClick={() => this.deletarAnime(index.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };
}
