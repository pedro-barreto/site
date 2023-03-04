export default function Informacao({ titulo, paragrafo, foto, row }) {
  return (
    <div className={`flex bg-cor1 rounded-2xl mx-14 overflow-hidden border`}>
      <div className="flex flex-col justify-center px-8">
        <h2 className=" text-xl font-bold text-gray-300">{titulo}</h2>
        <hr className="my-2" />
        <p className="text-gray-400 text-justify">{paragrafo}</p>
      </div>
      <div className="h-80 aspect-square">
        <img src={foto} alt="Imagem" className="w-full h-full" />
      </div>
    </div>
  );
}
