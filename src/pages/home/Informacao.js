import "./Informacao.css";

function Informacao({ titulo, link }) {
  return (
    <div className="informacao">
      <div className="texto">
        <h2>{titulo}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          assumenda possimus exercitationem autem perferendis nostrum itaque
          rerum consequatur totam minus accusamus vero eveniet libero incidunt
          placeat necessitatibus, sapiente nam iste quia? Ducimus sunt quae,
          velit maiores quasi ad accusamus labore eaque nulla sapiente, nostrum
          repellat itaque! Hic nisi nemo beatae quo rem voluptatem sapiente
          velit nesciunt quae, et ut sint eveniet dolore eius modi sequi ad qui
          error quis. Magnam minima, nesciunt ipsa placeat id et eveniet
          laboriosam ipsum enim assumenda cum fugiat repellat illum iure itaque,
          laudantium consectetur ad molestias est non? Accusantium quos vel
          nesciunt praesentium quibusdam, dicta cum aperiam tempora veniam vero
          veritatis, perferendis doloribus deserunt eius? Repellendus voluptas,
          quos quas recusandae doloribus laborum obcaecati quo perspiciatis
          officiis aspernatur quaerat distinctio debitis fugit eaque quod,
          accusantium neque corrupti provident quis ipsum pariatur itaque
          veniam. Tempore, laboriosam aliquam id aut qui ipsa ad dolor ab,
          incidunt alias quasi exercitationem vitae iure! Tenetur sequi
          molestiae, voluptatibus magnam natus autem quod dignissimos ipsam
          molestias porro assumenda soluta, qui maxime veritatis ea. Fuga a
          eligendi eaque similique dolores rem veniam enim iure fugiat ipsum
          alias minima voluptatum nam neque quos inventore aliquam, sapiente,
          incidunt explicabo vitae, assumenda quam quasi! Perspiciatis, ad?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          quisquam! Autem fugiat at dolores quasi, quae eum quis. Saepe, ipsum?
        </p>
      </div>
      <div className="imagem">
        <img src={link} alt="Imagem" />
      </div>
    </div>
  );
}

export default Informacao;
