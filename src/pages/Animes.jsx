import Aside from "../components/Aside";
import CardAnime from "../components/CardAnime";
import Form from "../components/Form";

export default function Jogos() {
  const links = [
    { nome: "Link 1", url: "" },
    { nome: "Link 2", url: "" },
  ];

  const categoria = [
    { id: 1, tipo: "comédia" },
    { id: 2, tipo: "isekai" },
    { id: 3, tipo: "romance" },
  ];

  const titulo = "Anime";
  const foto = "https://via.placeholder.com/250";
  const sinopse =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sunt asperiores atque amet suscipit dolores et culpa. Voluptas, tenetur quae? ";

  return (
    <div className="grid grid-cols-12 bg-cor4-100 dark:bg-gray-600">
      <Aside tituloAside={"Animes"} arrLinks={links} />
      <div className="flex flex-col justify-center items-center sm:col-span-10 col-span-full">
        <h1 className="font-bold text-4xl sm:text-5xl py-14 font-nippo dark:text-gray-300">
          ANIMES
        </h1>
        <div className="w-11/12 sm:w-2/4">
          <Form />
        </div>
        <div className="flex flex-wrap justify-around p-10">
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
          <CardAnime
            titulo={titulo}
            foto={foto}
            sinopse={sinopse}
            tags={categoria}
          />
        </div>
      </div>
    </div>
  );
}
