import Aside from "../components/Aside";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div className="grid grid-cols-12 h-fmhf bg-cor2">
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className="grid place-items-center col-span-10 h-fmhf">
        <h1 className="text-4xl font-black">Animes</h1>
      </div>
    </div>
  );
}
