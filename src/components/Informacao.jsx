export default function Informacao({ titulo, paragrafo, foto }) {
  return (
    <>
      <div>
        <div>
          <h2>{titulo}</h2>
          <hr />
          <p>{paragrafo}</p>
        </div>
        <div>
          <img src={foto} alt="Imagem" />
        </div>
      </div>
      <hr />
    </>
  );
}
