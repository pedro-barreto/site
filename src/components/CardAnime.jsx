export default function CardAnime({ titulo, foto, sinopse, tags }) {
  return (
    <div className="max-w-xs bg-cor5 text-gray-300 p-4 pt-2 my-5 rounded-2xl border border-black cursor-pointer dark:border-white dark:bg-red-900">
      <h1 className="text-center text-2xl font-black bg-cor4-100 text-black rounded-lg dark:bg-cor4-300">
        {titulo}
      </h1>
      <div className="flex justify-center p-2">
        <img src={foto} alt={titulo} />
      </div>
      <ul className="flex justify-center">
        {tags.map((index) => (
          <li
            key={index.id}
            className="bg-cor4-100 p-1 mx-1 mb-2 text-black font-bold dark:bg-cor4-300"
          >
            {index.tipo}
          </li>
        ))}
      </ul>
      <p className="px-3 py-2 bg-gray-700 text-gray-100 rounded-lg">
        {sinopse}
      </p>
    </div>
  );
}
