export default function Informacao({ titulo, paragrafo, foto }) {
  return (
    <div className="grid grid-cols-12">
      <div className="flex flex-col justify-center col-span-9 p-6">
        <h2 className="mb-4 text-xl font-bold">{titulo}</h2>
        <p>{paragrafo}</p>
      </div>
      <div className="col-span-3">
        <img src={foto} alt="Imagem" />
      </div>
    </div>
  );
}
