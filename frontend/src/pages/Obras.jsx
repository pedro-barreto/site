import axios from "axios";
import CardObras from "../components/CardObras.jsx";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Obras() {
  const [currentPage, setCurrentPage] = useState(1);
  const [obras, setObras] = useState([]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/`)
      .then((res) => setObras(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex flex-col justify-center items-center bg-cor4-100 dark:bg-gray-600">
      <h1 className="font-bold text-4xl sm:text-5xl py-14 font-nippo dark:text-gray-100">
        Obras
      </h1>

      <Link
        to={"/cadastrar-obra"}
        className="bg-lime-600 text-white px-8 py-4 rounded-lg font-extrabold"
      >
        Cadastrar
      </Link>

      <div className="w-full flex flex-wrap justify-evenly p-5 sm:p-0">
        {obras.map((obra) => (
          <CardObras
            key={obra.id}
            id={obra.id}
            titulo={obra.nome}
            sinopse={obra.sinopse}
            foto={`data:image/webp;base64,${btoa(
              String.fromCharCode.apply(null, new Uint8Array(obra.imagem.data))
            )}`}
            duracao={obra.duracao}
            data={obra.data}
            avaliacao={obra.avaliacao}
          />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center mb-10">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={Math.ceil(obras.length / 8)}
          onPageChange={onPageChange}
          previousLabel="Voltar"
          nextLabel="Próximo"
          showIcons
        />
      </div>
    </main>
  );
}
