export default function CardAnime({ titulo, foto, sinopse, tags }) {
  return (
    <div className="max-w-xs bg-cor5 text-white p-4 my-5 rounded-2xl cursor-pointer">
      <h1 className="text-center text-2xl font-black bg-cor4 text-cor5 rounded-full">
        {titulo}
      </h1>
      <div className="flex justify-center p-2">
        <img src={foto} alt={titulo} />
      </div>
      <ul className="flex justify-center">
        {tags.map((index) => (
          <li
            key={index.id}
            className="bg-cor4 p-1 mx-1 mb-2 text-black font-bold rounded-full"
          >
            {index.tipo}
          </li>
        ))}
      </ul>
      <p className="text-justify px-3 py-2 bg-gray-700 text-gray-100 rounded-lg">
        {sinopse}
      </p>
    </div>
  );
}
