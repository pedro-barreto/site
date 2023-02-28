import Aside from "../components/Aside";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div>
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div>
        <div>
          <h1>Animes</h1>
        </div>
      </div>
    </div>
  );
}
