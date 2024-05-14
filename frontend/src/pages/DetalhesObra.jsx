import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";

export default function DetalhesObra() {
  const toast = useRef(null);
  const { id } = useParams();
  const [obra, setObra] = useState([]);

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Erro ao listar a obra",
      detail: `Erro: ${error.message}`,
      life: 3000,
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/obras/${id}`)
      .then((res) => setObra(res.data[0]))
      .catch((err) => showError(err));
  }, [id]);

  return (
    <main className="w-full bg-cor4-100">
      <Toast ref={toast} />
      <Link to={"/obras"}>Voltar</Link>

      <div className="flex p-16">
        <div className="w-5/12 bg-white backdrop-blur-md p-4 rounded-2xl border-2 border-black">
          {obra.imagem && (
            <img
              className="w-full"
              src={`data:image/webp;base64,${btoa(
                String.fromCharCode.apply(
                  null,
                  new Uint8Array(obra.imagem.data)
                )
              )}`}
              alt={`capa do anime ${obra.titulo}`}
            />
          )}
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
