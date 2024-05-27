import axios from "axios";
import CardObras from "../components/CardObras.jsx";
import { Paginator } from "primereact/paginator";
import { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { Link } from "react-router-dom";

export default function Obras() {
  const toast = useRef(null);
  const [page, setPage] = useState(0);
  const [obras, setObras] = useState([]);
  const [loading, setLoading] = useState(true);

  const onPageChange = (event) => {
    setPage(event.page);
    window.scrollTo(0, 0);
  };

  const showError = (error) => {
    toast.current.show({
      severity: "error",
      summary: "Erro ao listar obras",
      detail: `Erro: ${error.message}`,
      life: 3000,
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/`)
      .then((res) => {
        setObras(res.data);
        setLoading(false);
      })
      .catch((err) => showError(err));
  }, []);

  const exibicao = obras.slice(page * 8, (page + 1) * 8);

  return (
    <main className="flex flex-col items-center bg-cor4-100 dark:bg-gray-600 pb-10">
      <Toast ref={toast} />

      <h1 className="font-bold text-4xl sm:text-5xl py-14 font-nippo dark:text-gray-100">
        Obras
      </h1>

      <Link
        to={"/cadastrar-obra"}
        className="bg-lime-600 text-white px-8 py-4 rounded-lg font-extrabold fixed right-5 mt-5 z-10"
      >
        Cadastrar
      </Link>

      <div className="w-full flex flex-wrap justify-evenly p-5 sm:p-0">
        {!loading ? (
          exibicao.map((obra) => (
            <CardObras
              key={obra.id}
              id={obra.id}
              titulo={obra.nome}
              sinopse={obra.sinopse}
              foto={`data:image/webp;base64,${btoa(
                String.fromCharCode.apply(
                  null,
                  new Uint8Array(obra.imagem.data)
                )
              )}`}
              duracao={obra.duracao}
              data={obra.data}
              avaliacao={obra.avaliacao}
            />
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
      </div>
      {obras.length > 8 && (
        <div className="flex overflow-x-auto sm:justify-center">
          <Paginator
            first={page}
            rows={1}
            totalRecords={Math.ceil(obras.length / 8)}
            onPageChange={onPageChange}
            className="dark:bg-gray-800 dark:text-white"
          />
        </div>
      )}
    </main>
  );
}
