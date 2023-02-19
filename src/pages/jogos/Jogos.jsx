import Aside from "../../components/Aside";
import "./Jogos.css";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
    { nome: "Link 4", url: "" },
    { nome: "Link 5", url: "" },
    { nome: "Link 6", url: "" },
    { nome: "Link 7", url: "" },
    { nome: "Link 8", url: "" },
  ];

  return (
    <div className="jogos">
      <Aside tituloAside={"Jogos"} arrLinks={links} />
      <div className="conteudo">
        <h1>JOGOS</h1>
      </div>
    </div>
  );
}
