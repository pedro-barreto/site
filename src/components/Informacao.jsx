export default function Informacao({ titulo, paragrafo, foto, row }) {
  return (
    <div
      className={`flex flex-col-reverse bg-gray-200 rounded-2xl m-5 sm:mx-14 overflow-hidden border border-black dark:bg-gray-700 dark:border-white ${
        row ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="h-4/6 lg:w-9/12 pb-5 px-5 flex flex-col m-auto">
        <h2
          className={`text-center pt-2 lg:pt-8 text-xl font-bold text-gray-700 dark:text-gray-100 ${
            row ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {titulo}
        </h2>
        <hr className="my-2 border-black dark:border-white" />
        <p className="text-gray-600 text-justify dark:text-gray-200">
          {paragrafo}
        </p>
      </div>
      <div className="max-h-80 lg:w-3/12 aspect-square flex m-auto p-5 overflow-hidden">
        <img
          src={foto}
          alt="Imagem"
          loading="lazy"
          className="transition duration-300 hover:scale-150"
        />
      </div>
    </div>
  );
}
