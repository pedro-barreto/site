export default function Card({ titulo, texto, imagem }) {
  return (
    <div className=" w-64 m-5 bg-gray-400 rounded-lg shadow">
      <img
        className="w-full rounded-t-lg aspect-square object-cover"
        src={imagem}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
          {titulo}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{texto}</p>
      </div>
    </div>
  );
}
