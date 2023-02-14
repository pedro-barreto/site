import "./Card.css";

function Card({ texto, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt="Card" />
      <p>{texto}</p>
    </div>
  );
}

export default Card;
