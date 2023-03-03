import Informacao from "../components/Informacao";

export default function Sobre() {
  const p =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quaerat voluptate blanditiis nihil veniam? Doloremque nesciunt quaerat commodi ipsum voluptatibus. Sapiente, laudantium dolores voluptatibus modi totam possimus error repellat deleniti sed nam. Culpa ad porro, tenetur explicabo voluptatibus quaerat eius architecto nam minus earum obcaecati asperiores perspiciatis optio iusto mollitia temporibus laudantium. Velit ducimus accusantium ab recusandae quo totam molestiae facilis deleniti quibusdam numquam optio amet officiis minus ipsa itaque ullam error molestias sequi enim commodi, natus quaerat reprehenderit! Iure unde mollitia voluptatum dolore dolor";

  return (
    <div className=" bg-cor2">
      <h1 className="text-center py-28 text-4xl font-bold">
        SOBRE NOSSA EMPRESA!
      </h1>
      <div className="space-y-28">
        <Informacao
          titulo={"Titulo 1"}
          paragrafo={p}
          foto={"https://via.placeholder.com/250"}
        />
        <Informacao
          titulo={"Titulo 2"}
          paragrafo={p}
          foto={"https://via.placeholder.com/250"}
        />
        <Informacao
          titulo={"Titulo 3"}
          paragrafo={p}
          foto={"https://via.placeholder.com/250"}
        />
        <Informacao
          titulo={"Titulo 4"}
          paragrafo={p}
          foto={"https://via.placeholder.com/250"}
        />
      </div>
    </div>
  );
}
