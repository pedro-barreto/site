import CardObras from "../../components/CardObras.jsx";
import { dbObras } from "./dbObras.jsx";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export default function Obras() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectChange, setSelectChange] = useState("default");

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const onOrder = (event) => {
    setSelectChange(event.target.value);
  };

  const sortedObras = [...dbObras].sort((a, b) => {
    if (selectChange === "dataAntigo") {
      return a.info.data - b.info.data;
    }
    if (selectChange === "dataNovo") {
      return b.info.data - a.info.data;
    }
    if (selectChange === "notaMelhor") {
      return b.info.avaliacao - a.info.avaliacao;
    }
    if (selectChange === "notaPior") {
      return a.info.avaliacao - b.info.avaliacao;
    }

    return a + b;
  });

  const exibicao = sortedObras.slice((currentPage - 1) * 8, currentPage * 8);

  return (
    <main className="flex flex-col justify-center items-center bg-cor4-100 dark:bg-gray-600">
      <h1 className="font-bold text-4xl sm:text-5xl py-14 font-nippo dark:text-gray-100">
        Obras
      </h1>

      <select name="Ordenar" value={selectChange} onChange={onOrder}>
        <option value="default">default (sem ordem) </option>
        <option value="dataNovo">data (novos) </option>
        <option value="dataAntigo">data (antigos) </option>
        <option value="notaMelhor">nota (melhores) </option>
        <option value="notaPior">nota (piores) </option>
      </select>

      <div className="w-full flex flex-wrap justify-evenly p-5 sm:p-0">
        {exibicao.map((index, key) => (
          <CardObras
            key={index.id}
            id={index.id}
            titulo={index.titulo}
            foto={index.foto}
            sinopse={index.sinopse}
            info={index.info}
            data={index.info.data}
          />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center mb-10">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={Math.ceil(dbObras.length / 8)}
          onPageChange={onPageChange}
          previousLabel="Voltar"
          nextLabel="Próximo"
          showIcons
        />
      </div>
    </main>
  );
}
