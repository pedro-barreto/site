import Informacao from "../components/Informacao";
import homeInit from "../img/homeInit.jpg";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import card01 from "../img/card01.jpg";
import card02 from "../img/card02.jpg";
import card03 from "../img/card03.jpg";
import card04 from "../img/card04.jpg";
import card05 from "../img/card05.jpg";
import card06 from "../img/card06.jpg";
import card07 from "../img/card07.jpg";
import card08 from "../img/card08.jpg";
import card09 from "../img/card09.jpg";
import card10 from "../img/card10.jpg";
import card11 from "../img/card11.jpg";
import card12 from "../img/card12.jpg";
import Card from "../components/Card";

export default function Home() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui recusandae officia. Doloremque exercitationem quia sint vel aliquam corporis unde inventore excepturi dolores nihil maiores sapiente aut ad delectus magnam fuga animi tempore assumenda esse accusantium neque, veritatis et! Laborum non necessitatibus rem illum iure architecto vel voluptates maiores? Autem et nobis odio earum, similique, commodi veritatis, nostrum animi molestiae veniam unde quae quod. Ipsum, ex tempora nulla corporis deleniti iusto harum at quisquam dicta magnam dolorem, veritatis adipisci, nihil sapiente cum sed architecto? Aliquam voluptatem debitis expedita voluptas! Porro maiores voluptates quod cum accusamus dolor ex est tempore possimus! ";
  const texto2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum optio perferendis aliquam repellat veritatis blanditiis unde rem non quia ipsum magni ipsa iste similique praesentium, in, facere corporis et! ";
  return (
    <div>
      <div>
        <img
          src={homeInit}
          alt="Foto inicial"
          className="w-screen h-fmh object-cover"
        />
      </div>
      <div className="px-14">
        <h1 className="text-center my-28 text-4xl font-bold">
          INFORMAÇÕES STUDIO GHIBLI
        </h1>
        <div className="space-y-28">
        <Informacao titulo="Titulo 1" paragrafo={texto} foto={image1} />
        <Informacao titulo="Titulo 2" paragrafo={texto} foto={image2} />
        <Informacao titulo="Titulo 3" paragrafo={texto} foto={image3} />
        <Informacao titulo="Titulo 4" paragrafo={texto} foto={image4} />
        <Informacao titulo="Titulo 5" paragrafo={texto} foto={image5} />
        </div>
      </div>
      <div className="p-14">
        <h1 className="text-center my-28 text-4xl font-bold">
          CARTÕES SOBRE O STUDIO GHIBLI
        </h1>
        <div className="flex flex-wrap justify-center">
          <Card titulo={"Titulo 1 "} texto={texto2} imagem={card01} />
          <Card titulo={"Titulo 2 "} texto={texto2} imagem={card02} />
          <Card titulo={"Titulo 3 "} texto={texto2} imagem={card03} />
          <Card titulo={"Titulo 4 "} texto={texto2} imagem={card04} />
          <Card titulo={"Titulo 5 "} texto={texto2} imagem={card05} />
          <Card titulo={"Titulo 6 "} texto={texto2} imagem={card06} />
          <Card titulo={"Titulo 7 "} texto={texto2} imagem={card07} />
          <Card titulo={"Titulo 8 "} texto={texto2} imagem={card08} />
          <Card titulo={"Titulo 9 "} texto={texto2} imagem={card09} />
          <Card titulo={"Titulo 10"} texto={texto2} imagem={card10} />
          <Card titulo={"Titulo 11"} texto={texto2} imagem={card11} />
          <Card titulo={"Titulo 12"} texto={texto2} imagem={card12} />
        </div>
      </div>
    </div>
  );
}
