import Aside from "../../components/Aside";
import "./Artes.css";

export default function Acessorios() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
  ];

  return (
    <div className="artes">
      <Aside tituloAside={"Artes"} arrLinks={links} />
      <div className="conteudo">
        <h1>Artes</h1>
      </div>
    </div>
  );
}
