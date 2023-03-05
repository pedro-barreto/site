export default function Informacao({ titulo, paragrafo, foto, loading }) {
  return (
    <div
      className={`lg:grid lg:grid-cols-12 bg-cor1 rounded-2xl m-5 sm:mx-14 overflow-hidden border flex flex-col-reverse`}
    >
      <div className="flex flex-col justify-center p-8 pt-0 col-span-8">
        <h2 className="text-center lg:pt-8 lg:text-left text-xl font-bold text-gray-300">
          {titulo}
        </h2>
        <hr className="my-2" />
        <p className="text-gray-400 sm:text-justify text-center">{paragrafo}</p>
      </div>
      <div className="max-w-xs aspect-square m-auto col-span-4 p-5">
        <img src={foto} alt="Imagem" className="w-full h-full" loading={loading?"lazy":"eager"} />
      </div>
    </div>
  );
}
