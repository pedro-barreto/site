import Informacao from "../components/Informacao";
import Slide from "../components/Slide";
import image1 from "../img/home/image1.jpg";
import image2 from "../img/home/image2.jpg";
import image3 from "../img/home/image3.jpg";
import image4 from "../img/home/image4.jpg";
import image5 from "../img/home/image5.jpg";
import card01 from "../img/card/card01.jpg";
import card02 from "../img/card/card02.jpg";
import card03 from "../img/card/card03.jpg";
import card04 from "../img/card/card04.jpg";
import card05 from "../img/card/card05.jpg";
import card06 from "../img/card/card06.jpg";
import card07 from "../img/card/card07.jpg";
import card08 from "../img/card/card08.jpg";
import card09 from "../img/card/card09.jpg";
import card10 from "../img/card/card10.jpg";
import card11 from "../img/card/card11.jpg";
import card12 from "../img/card/card12.jpg";
import Card from "../components/Card";

export default function Home() {
  const texto =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui recusandae officia. Doloremque exercitationem quia sint vel aliquam corporis unde inventore excepturi dolores nihil maiores sapiente aut ad delectus magnam fuga animi tempore assumenda esse accusantium neque, veritatis et! Laborum non necessitatibus rem illum iure architecto vel voluptates maiores? Autem et nobis odio earum, similique, commodi veritatis, nostrum animi molestiae veniam unde quae quod. Ipsum, ex tempora nulla corporis deleniti iusto harum at quisquam dicta magnam dolorem, veritatis adipisci, nihil sapiente cum sed architecto? Aliquam voluptatem debitis expedita voluptas! Porro maiores voluptates quod cum accusamus dolor ex est ";
  const texto2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum optio perferendis aliquam repellat veritatis blanditiis unde rem non quia ipsum magni ipsa iste similique praesentium, in, facere corporis et! ";

  return (
    <div>
      <Slide />
      <div className="bg-cor2">
        <h1 className="text-center text-black py-28 text-5xl font-nippo">
          STUDIO GHIBLI
        </h1>
        <div className="space-y-28">
          <Informacao
            titulo="Titulo 1"
            paragrafo={texto}
            foto={image1}
            row={false}
          />
          <hr className="border-black" />
          <Informacao
            titulo="Titulo 2"
            paragrafo={texto}
            foto={image2}
            row={true}
          />
          <hr className="border-black" />
          <Informacao
            titulo="Titulo 3"
            paragrafo={texto}
            foto={image3}
            row={false}
          />
          <hr className="border-black" />
          <Informacao
            titulo="Titulo 4"
            paragrafo={texto}
            foto={image4}
            row={true}
          />
          <hr className="border-black" />
          <Informacao
            titulo="Titulo 5"
            paragrafo={texto}
            foto={image5}
            row={false}
          />
        </div>
      </div>
      <svg viewBox="0 0 1440 320" className="bg-cor4">
        <path
          fill="#75B8C8"
          d="M0,128L24,122.7C48,117,96,107,144,117.3C192,128,240,160,288,192C336,224,384,256,432,261.3C480,267,528,245,576,218.7C624,192,672,160,720,128C768,96,816,64,864,64C912,64,960,96,1008,122.7C1056,149,1104,171,1152,160C1200,149,1248,107,1296,112C1344,117,1392,171,1416,197.3L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
      <div className=" bg-cor4 pb-28">
        <h1 className="text-center pb-28 text-5xl font-nippo">
          CARDS SOBRE O STUDIO GHIBLI
        </h1>
        <div className="flex flex-wrap justify-center">
          <Card
            titulo={"Titulo 1 "}
            texto={texto2}
            imagem={card01}
            loading={true}
          />
          <Card
            titulo={"Titulo 2 "}
            texto={texto2}
            imagem={card02}
            loading={true}
          />
          <Card
            titulo={"Titulo 3 "}
            texto={texto2}
            imagem={card03}
            loading={true}
          />
          <Card
            titulo={"Titulo 4 "}
            texto={texto2}
            imagem={card04}
            loading={true}
          />
          <Card
            titulo={"Titulo 5 "}
            texto={texto2}
            imagem={card05}
            loading={true}
          />
          <Card
            titulo={"Titulo 6 "}
            texto={texto2}
            imagem={card06}
            loading={true}
          />
          <Card
            titulo={"Titulo 7 "}
            texto={texto2}
            imagem={card07}
            loading={true}
          />
          <Card
            titulo={"Titulo 8 "}
            texto={texto2}
            imagem={card08}
            loading={true}
          />
          <Card
            titulo={"Titulo 9 "}
            texto={texto2}
            imagem={card09}
            loading={true}
          />
          <Card
            titulo={"Titulo 10"}
            texto={texto2}
            imagem={card10}
            loading={true}
          />
          <Card
            titulo={"Titulo 11"}
            texto={texto2}
            imagem={card11}
            loading={true}
          />
          <Card
            titulo={"Titulo 12"}
            texto={texto2}
            imagem={card12}
            loading={true}
          />
        </div>
      </div>
    </div>
  );
}
