import "./Home.css";
import Informacao from "./Informacao";
import Card from "../../components/Card";

function Home() {
  const texto =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate beatae animi id aut, velit odio placeat quaerat autem voluptatem dolores? Maxime nulla autem non alias aliquam enim nihil atque, natus ratione in, beatae iusto explicabo doloribus modi repellendus omnis velit hic consectetur eos, magni nostrum praesentium necessitatibus fugiat";

  return (
    <div className="conteudo">
      <div className="slider">
        <img
          src="https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2019/02/totoro.jpg?fit=1920%2C1080&ssl=1"
          alt="Imagem inicio"
          className="introducao"
        />
      </div>

      <div className="informacoes">
        <h1>Lorem, ipsum dolor.</h1>

        <Informacao
          titulo="Titulo 1"
          link="https://static.boredpanda.com/blog/wp-content/uploads/2016/11/studio-ghibli-inspired-fan-art-paintings-oil-watercolor-1-5832aa0d3b58f__880.jpg"
        />

        <Informacao
          titulo="Titulo 2"
          link="https://i.pinimg.com/564x/87/7d/1b/877d1b7863e50ff26e30c08c65021b5b.jpg"
        />

        <Informacao
          titulo="Titulo 3"
          link="https://70f186a60af817fe0731-09dac41207c435675bfd529a14211b5c.ssl.cf1.rackcdn.com/assets/attachments_p/000/065/252/size500_yohichi2.jpg"
        />

        <Informacao
          titulo="Titulo 4"
          link="https://70f186a60af817fe0731-09dac41207c435675bfd529a14211b5c.ssl.cf1.rackcdn.com/assets/attachments_p/000/093/260/size500_yoichi_web1.jpg"
        />

        <Informacao
          titulo="Titulo 5"
          link="https://i.pinimg.com/originals/99/ea/6d/99ea6d9f121d25ec135e4a2f7a599f29.jpg"
        />
      </div>
      <div className="cards-menu">
        <div className="titulo">
          <h1>Lorem, ipsum dolor.</h1>
        </div>
        <div className="cards">
          <Card
            texto={texto}
            imagem={
              "https://www.filmmusicsite.com/images/covers/normal/80907.jpg"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://www.filmmusicsite.com/images/covers/normal/80870.jpg"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://preview.redd.it/vv1yxxaimze11.jpg?auto=webp&s=1bfc6517dbeed878afd678b4429767b0c81329e9"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://64.media.tumblr.com/d8adca2eae42f5755e27e2aca69ceb1a/c4a65213c8a316a8-2a/s250x400/75b562c6353e355e169891e91d0ddd43ed48ac3f.jpg"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://cdn.shopify.com/s/files/1/0068/0042/products/studio-ghibli-records-joe-hisaishi-ponyo-on-the-cliff-by-the-sea-image-album-obi-strip-lp-lp-4988008088519-sghi10031-1-photo-photo-photo-28213217329335_250x.jpg?v=1615882025"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://cinematologia.com.br/cine/wp-content/uploads/2016/09/A-Viagem-de-Chihiro-Walt-Disney-2-250x250.jpg"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://cdn.animenewsnetwork.com/thumbnails/max300x600/cms/news.2/146975/wind.jpg"
            }
          />
          <Card
            texto={texto}
            imagem={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl6s-kllDkdBeYXC0RWUIvnyjsz1RjeEMnVw&usqp=CAU"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
