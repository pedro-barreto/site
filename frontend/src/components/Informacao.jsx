import PropTypes from "prop-types";
export default function Informacao({ titulo, paragrafo, foto, row }) {
  return (
    <section
      data-aos={"fade-right"}
      className={`flex flex-col-reverse bg-gray-200 rounded-2xl mx-5 sm:mx-14 border border-black dark:bg-gray-700 dark:border-white ${
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
        <p className="text-gray-600 text-justify text-xs sm:text-sm dark:text-gray-200">
          {paragrafo}
        </p>
      </div>
      <div
        className={`max-h-80 lg:w-3/12 aspect-square flex m-auto p-5 overflow-hidden border-black dark:border-white ${
          row ? "lg:border-r" : "lg:border-l"
        }`}
      >
        <img
          src={foto}
          alt="Imagem"
          className="transition duration-300 hover:scale-150"
        />
      </div>
    </section>
  );
}

Informacao.propTypes = {
  titulo: PropTypes.string.isRequired,
  paragrafo: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
  row: PropTypes.bool.isRequired,
};
