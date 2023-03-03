export default function Informacao({ titulo, paragrafo, foto }) {
  return (
    <>
      <div className="flex bg-cor1 rounded-2xl mx-14">
        <div className="flex flex-col justify-center px-8">
          <h2 className=" text-xl font-bold text-white">{titulo}</h2>
          <hr className="my-2" />
          <p className="text-gray-100 text-justify">{paragrafo}</p>
        </div>
        <div className="h-80 aspect-square">
          <img
            src={foto}
            alt="Imagem"
            className="rounded-r-2xl w-full h-full"
          />
        </div>
      </div>
      <hr className="border-black" />
    </>
  );
}
