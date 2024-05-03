import { Link, useParams } from "react-router-dom";
import { dbObras } from "../Obras/dbObras";

export default function DetalhesObra() {
  window.scrollTo(0, 0);

  const { id } = useParams();
  const obra = dbObras.find((item) => item.id === parseInt(id));

  return (
    <main className="w-full bg-cor4-100">
      <Link to={"/obras"}>Voltar</Link>

      <div className="flex p-16">
        <div className="w-5/12 bg-white backdrop-blur-md p-4 rounded-2xl border-2 border-black">
          <img src={obra.foto} className="w-full" alt="" />
        </div>
        <div className="w-7/12 bg-white ml-5 p-5 border border-black">
          <h1>{obra.titulo}</h1>
          <strong>Sinopse</strong>
          <hr />
          <p>{obra.sinopse}</p>
        </div>
      </div>
    </main>
  );
}
