import Carousel from "react-bootstrap/Carousel";
import './Slide.css'

export default function Slide() {
  return (
    <Carousel pause={false}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.fatosdesconhecidos.com.br/wp-content/uploads/2019/02/totoro.jpg?fit=1920%2C1080&ssl=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://cinepop.com.br/wp-content/uploads/2022/04/jbareham_200520_1021_ghibli_week_0001b.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://assets.b9.com.br/wp-content/uploads/2019/05/Studio-Ghibli-1280x720.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://www.planocritico.com/wp-content/uploads/2021/06/studio_ghibli-plano-critico-filme-animacao-anime.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
