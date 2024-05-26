import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { FaClock, FaStar } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";

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

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/obras/${id}`)
      .then((res) => setObra(res.data[0]))
      .catch((err) => showError(err));
  }, [id]);

  return (
    <main className="bg-cor4-100 dark:bg-gray-600">
      <Toast ref={toast} />

      <div className="bg-white border border-black rounded-3xl py-2 px-4 mt-5 ml-5 inline-block fixed right-5">
        <Link
          to={"/obras"}
          className=" flex items-center font-nippo text-xl gap-2"
        >
          Voltar <IoArrowUndoOutline className="text-2xl" />
        </Link>
      </div>

      <section className="flex flex-col lg:flex-row p-2 sm:p-16">
        <div className="lg:w-5/12 flex justify-center items-center bg-white p-4 border border-b-0 lg:border lg:border-r-0 border-black rounded-t-lg lg:rounded-r-none lg:rounded-l-lg">
          {obra.imagem && (
            <img
              className="w-full"
              src={`data:image/webp;base64,${btoa(
                String.fromCharCode.apply(
                  null,
                  new Uint8Array(obra.imagem.data)
                )
              )}`}
              alt={`capa do anime ${obra.nome}`}
            />
          )}
        </div>
        <div className="lg:w-7/12 bg-white p-5  border border-black rounded-b-lg lg:rounded-r-lg lg:rounded-l-none ">
          <div className="pb-3">
            <h1 className="font-nippo text-xl">Nome</h1>
            <hr className="border-black" />
            <p>{obra.nome}</p>
          </div>
          <div className="pb-3">
            <h1 className="font-nippo text-xl">Sinopse</h1>
            <hr className="border-black" />
            <p>{obra.sinopse}</p>
          </div>
          <div>
            <h1 className="font-nippo text-xl">Informações</h1>
            <hr className="border-black" />
            <div className="flex flex-col gap-1 pt-2">
              <div className="flex items-center font-semibold ">
                <FaClock />
                <h2 className="pl-1 pr-2">Duracao: </h2>
                <p>{`${Math.floor(obra.duracao / 60)}h ${
                  obra.duracao % 60
                }m`}</p>
              </div>
              <div className="flex items-center font-semibold ">
                <BsCalendarDateFill />
                <h2 className="pl-1 pr-2">Lançamento: </h2>
                <p>{`${new Date(obra.data).toLocaleDateString("pt-br")}`}</p>
              </div>
              <div className="flex items-center font-semibold ">
                <FaStar />
                <h2 className="pl-1 pr-2">Avaliação: </h2>
                <p>{`${obra.avaliacao} / 10`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-10 dark:text-white">
        <h1 className="font-nippo text-2xl">Autores</h1>
        <hr className="border-black dark:border-white" />
        <section className="flex flex-wrap gap-5 justify-center py-5">
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Diretor X" />
            <h2 className="font-nippo">Diretor</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Roterista X" />
            <h2 className="font-nippo">Roterista</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Diretor X" />
            <h2 className="font-nippo">Roterista</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Produtor X" />
            <h2 className="font-nippo">Produtor</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Compositor X" />
            <h2 className="font-nippo">Compositor</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://via.placeholder.com/250" alt="Compositor X" />
            <h2 className="font-nippo">Compositor</h2>
          </div>
        </section>

        <section>
          <h1 className="font-nippo text-2xl">Personagens</h1>
          <hr className="border-black dark:border-white" />
          <section className="flex flex-wrap gap-5 justify-center py-5">
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/250" alt="Personagem X" />
              <h2 className="font-nippo">Fulano</h2>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/250" alt="Personagem X" />
              <h2 className="font-nippo">Cicrano</h2>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/250" alt="Personagem X" />
              <h2 className="font-nippo">Beltrano</h2>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/250" alt="Personagem X" />
              <h2 className="font-nippo">Chico</h2>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
