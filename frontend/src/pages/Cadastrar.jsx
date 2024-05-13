import axios from "axios";
import { useState } from "react";
import CardObras from "../components/CardObras";

export default function Cadastrar() {
  const [values, setValues] = useState({
    nome: "",
    sinopse: "",
    duracao: 0,
    data: "",
    avaliacao: 0,
    imagem: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", values.nome);
    formData.append("sinopse", values.sinopse);
    formData.append("duracao", values.duracao);
    formData.append("data", values.data);
    formData.append("avaliacao", values.avaliacao);
    formData.append("imagem", values.imagem);

    await axios.post(`${process.env.REACT_APP_BASE_URL}/cadastrar-obra`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <main className="flex justify-around p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-black px-5"
      >
        <h1 className="block text-center font-nippo text-2xl mt-5">
          Cadastrar Obra
        </h1>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="nome">Título da obra</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={(e) => setValues({ ...values, nome: e.target.value })}
            values={values.nome}
            required
          />
        </div>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="sinopse">Sinopse da obra</label>
          <input
            type="text"
            name="sinopse"
            id="sinopse"
            onChange={(e) => setValues({ ...values, sinopse: e.target.value })}
            values={values.sinopse}
            required
          />
        </div>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="imagem">Imagem da obra</label>
          <input
            type="file"
            name="imagem"
            id="imagem"
            onChange={(e) => {
              setValues({ ...values, imagem: e.target.files[0] });
            }}
            values={values.imagem}
            required
          />
        </div>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="duracao">Duracao da obra (em minutos)</label>
          <input
            type="number"
            min={0}
            name="duracao"
            id="duracao"
            onChange={(e) => setValues({ ...values, duracao: e.target.value })}
            values={values.duracao}
            required
          />
        </div>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="data">Data de lançamento da obra</label>
          <input
            type="date"
            name="data"
            id="data"
            onChange={(e) => setValues({ ...values, data: e.target.value })}
            values={values.data}
            required
          />
        </div>
        <div className={"flex flex-col py-2"}>
          <label htmlFor="avaliacao">Nota de avaliacao da obra</label>
          <input
            type="number"
            min={0}
            max={10}
            step={0.1}
            name="avaliacao"
            id="avaliacao"
            onChange={(e) =>
              setValues({ ...values, avaliacao: e.target.value })
            }
            values={values.avaliacao}
          />
        </div>
        <button
          type="submit"
          className="bg-cor5 text-white block m-auto w-full py-3 mt-5 mb-10 rounded-lg"
        >
          Cadastrar
        </button>
      </form>

      <CardObras
        titulo={values.nome ? values.nome : "Título"}
        sinopse={values.sinopse ? values.sinopse : "Sinópse da Obra"}
        foto={
          values.imagem
            ? URL.createObjectURL(values.imagem)
            : "https://via.placeholder.com/300?text=Capa"
        }
        duracao={values.duracao ? values.duracao : 0}
        data={values.data ?? "1985"}
        avaliacao={values.avaliacao ? values.avaliacao : 0}
      />
    </main>
  );
}
