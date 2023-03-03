import Aside from "../components/Aside";
import Modal from "../components/Modal";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div className="grid grid-cols-12 h-fmhf bg-cor3">
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className="flex flex-col justify-center items-center col-span-10">
        <Modal />
        <h1 className="text-4xl font-black">Animes</h1>
      </div>
    </div>
  );
}
