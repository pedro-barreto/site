import Aside from "../components/Aside";

export default function Acessorios() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
    { nome: "Link 3", url: "" },
  ];

  return (
    <div className="grid grid-cols-12 bg-cor2 ">
      <Aside tituloAside={"Artes"} arrLinks={links} />
      <div className="grid place-items-center col-span-10 h-fmhf">
        <h1 className="text-4xl font-black">Artes</h1>
      </div>
    </div>
  );
}
