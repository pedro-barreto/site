import "./Home.css";
import Informacao from "./Informacao";
import Card from "./Card";

function Home() {
  const texto =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate beatae animi id aut, velit odio placeat quaerat autem voluptatem dolores? Maxime nulla autem non alias aliquam enim nihil atque, natus ratione in, beatae iusto explicabo doloribus modi repellendus omnis velit hic consectetur eos, magni nostrum praesentium necessitatibus fugiat";

  return (
    <div className="home">
      <div className="slider">
        <img
          src="https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2019/02/totoro.jpg?fit=1920%2C1080&ssl=1"
          alt="Imagem inicio"
          className="introducao"
        />
      </div>
      <div className="informacoes">

        <h1>INFORMAÇÕES STUDIO GHIBLI</h1>

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
          <h1>CARDS SOBRE O STUDIO GHIBLI</h1>
        </div>
        <div className="cards">
          <Card
            titulo={"Titulo 1"}
            texto={texto}
            imagem={
              "https://www.filmmusicsite.com/images/covers/normal/80907.jpg"
            }
          />
          <Card
            titulo={"Titulo 2"}
            texto={texto}
            imagem={
              "https://www.filmmusicsite.com/images/covers/normal/80870.jpg"
            }
          />
          <Card
            titulo={"Titulo 3"}
            texto={texto}
            imagem={
              "https://preview.redd.it/vv1yxxaimze11.jpg?auto=webp&s=1bfc6517dbeed878afd678b4429767b0c81329e9"
            }
          />
          <Card
            titulo={"Titulo 4"}
            texto={texto}
            imagem={
              "https://64.media.tumblr.com/d8adca2eae42f5755e27e2aca69ceb1a/c4a65213c8a316a8-2a/s250x400/75b562c6353e355e169891e91d0ddd43ed48ac3f.jpg"
            }
          />
          <Card
            titulo={"Titulo 5"}
            texto={texto}
            imagem={
              "https://images.8tracks.com/cover/i/012/196/028/b59dda314520d3f2f49c77299f569f5d--miyazaki-film-howls-moving-castle-8950.jpg?rect=0,23,500,500&q=98&fm=jpg&fit=max"
            }
          />
          <Card
            titulo={"Titulo 6"}
            texto={texto}
            imagem={
              "https://cinematologia.com.br/cine/wp-content/uploads/2016/09/A-Viagem-de-Chihiro-Walt-Disney-2-250x250.jpg"
            }
          />
          <Card
            titulo={"Titulo 7"}
            texto={texto}
            imagem={
              "https://cdn.animenewsnetwork.com/thumbnails/max300x600/cms/news.2/146975/wind.jpg"
            }
          />
          <Card
            titulo={"Titulo 8"}
            texto={texto}
            imagem={
              "https://tricycle.org/wp-content/uploads/2020/10/studio-ghibli-spirituality-300x300.jpg"
            }
          />
          <Card
            titulo={"Titulo 9"}
            texto={texto}
            imagem={
              "https://i.pinimg.com/564x/5c/6b/10/5c6b106d5fb5c9563a25cd02ba05005f.jpg"
            }
          />
          <Card
            titulo={"Titulo 10"}
            texto={texto}
            imagem={
              "https://pbs.twimg.com/profile_images/1082043506179391492/UvgtTLuz_400x400.jpg"
            }
          />
          <Card
            titulo={"Titulo 11"}
            texto={texto}
            imagem={
              "https://i.pinimg.com/736x/09/45/9f/09459fd71f2839c78d2bcfa2db79e41f.jpg"
            }
          />
          <Card
            titulo={"Titulo 12"}
            texto={texto}
            imagem={
              "https://i0.wp.com/coolhunting.com/wp-content/uploads/2017/08/large-55.jpg?resize=600%2C600&ssl=1"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;