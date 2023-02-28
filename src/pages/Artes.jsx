import Aside from "../components/Aside";

export default function Acessorios() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
  ];

  return (
    <div>
      <Aside tituloAside={"Artes"} arrLinks={links} />
      <div>
        <h1>Artes</h1>
      </div>
    </div>
  );
}
