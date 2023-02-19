import Aside from "../../components/Aside";
import "./Acessorios.css";

export default function Acessorios() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
  ];

  return (
    <div className="acessorios">
      <Aside tituloAside={"Acessórios"} arrLinks={links} />
      <div className="conteudo">
        <h1>ACESSÓRIOS</h1>
      </div>
    </div>
  );
}
