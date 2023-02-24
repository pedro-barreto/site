import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import "./Teste.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Teste extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      nome: "",
      alunos: [],
    };
  }

  componentDidMount() {
    this.buscarAluno();
  }

  componentWillUnmount() {}

  buscarAluno = () => {
    fetch("http://localhost:5000/alunos", { method: "GET" })
      .then((request) => request.json())
      .then((data) => this.setState({ alunos: data }))
      .catch((err) => alert("Erro ao exibit alunos: " + err));
  };

  deletarAluno = (id) => {
    fetch("http://localhost:5000/alunos/" + id, { method: "DELETE" })
      .then((request) => {
        if (request.ok) {
          this.buscarAluno();
        }
      })
      .catch((err) => {
        alert("Erro ao deletar aluno: " + err);
      });
  };

  cadastrarAluno = (aluno) => {
    fetch("http://localhost:5000/alunos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno),
    })
      .then((request) => {
        if (request.ok) {
          this.buscarAluno();
        }
      })
      .catch((err) => {
        alert("Erro ao cadastrar aluno: " + err);
      });
  };

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };

  submit = () => {
    const aluno = {
      nome: this.state.nome,
    };

    this.cadastrarAluno(aluno);
  };

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira seu nome"
              value={this.state.nome}
              onChange={this.atualizaNome}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.submit}>
            Cadastrar
          </Button>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Botões</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alunos.map((index) => (
              <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.nome}</td>
                <td>
                  <MdModeEditOutline color="blue" fontSize={"1.5em"} />
                  <MdDelete
                    color="red"
                    fontSize={"1.5em"}
                    onClick={() => this.deletarAluno(index.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
