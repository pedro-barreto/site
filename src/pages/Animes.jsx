import Aside from "../components/Aside";
import Form from "../components/Form";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  return (
    <div className="grid grid-cols-12 h-fmhf bg-cor4">
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className="flex flex-col justify-center items-center sm:col-span-10 col-span-full">
        <h1 className="font-bold text-5xl p-5">Animes</h1>
        <Form />
      </div>
    </div>
  );
}
