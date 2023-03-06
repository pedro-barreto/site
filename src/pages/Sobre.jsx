import { Link } from "react-router-dom";
import { Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function Sobre() {
  return (
    <div className=" bg-cor3">
      <h1 className="text-center py-28 text-4xl font-bold text-gray-100">
        SOBRE NOSSA EMPRESA!
      </h1>
      <div className="w-full bg-gray-700 flex flex-col md:grid md:grid-cols-12">
        <div className="col-span-6 w-full grid place-items-center p-5">
          <img src="https://via.placeholder.com/500" alt="foto" />
        </div>
        <div className="text-justify md:text-left col-span-6 flex flex-col items-center text-gray-300 p-5 space-y-5">
          <h1 className="text-gray-100 text-4xl font-bold">Titulo</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            earum numquam dolorem iure reiciendis, error esse fugiat quo,
            exercitationem provident quia eos maxime similique asperiores
            veritatis fuga! Autem placeat veritatis natus quam nulla.
            Necessitatibus recusandae autem molestias eius, enim nesciunt fugiat
            minus nulla ea qui iure aliquam cupiditate ullam delectus dolorum
            aut quibusdam dolor commodi! Earum quidem molestiae nesciunt aperiam
            eius laudantium quibusdam? Delectus harum praesentium at
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
            neque dolores dolorum quam! Facere esse nostrum possimus ipsum
            quidem, dolorum modi fugit vel aliquam labore ducimus nihil totam
            eaque? Laudantium distinctio porro minima minus corporis deleniti
            dignissimos reprehenderit culpa. Repellat, suscipit nostrum. hic?
          </p>
          <div className="space-x-5">
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 1
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 2
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 3
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 4
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <div className="w-full bg-gray-700 flex flex-col md:grid md:grid-cols-12">
        <div className="text-justify md:text-left col-span-6 flex flex-col items-center text-gray-300 p-5 space-y-5">
          <h1 className="text-gray-100 text-4xl font-bold">Titulo</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            earum numquam dolorem iure reiciendis, error esse fugiat quo,
            exercitationem provident quia eos maxime similique asperiores
            veritatis fuga! Autem placeat veritatis natus quam nulla.
            Necessitatibus recusandae autem molestias eius, enim nesciunt fugiat
            minus nulla ea qui iure aliquam cupiditate ullam delectus dolorum
            aut quibusdam dolor commodi! Earum quidem molestiae nesciunt aperiam
            eius laudantium quibusdam? Delectus harum praesentium at
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            reprehenderit magni quaerat quo error nihil. Animi quidem tempore
            maiores praesentium a tenetur nisi sed voluptatum fugit dolorem
            labore, deleniti asperiores rerum ex accusamus, repellendus qui ab!
            Eveniet magni corporis officiis ratione? Pariatur sed eos,
            aspernatur fuga nemo neque repellat saepe!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe
            neque dolores dolorum quam! Facere esse nostrum possimus ipsum
            quidem, dolorum modi fugit vel aliquam labore ducimus nihil totam
            eaque? Laudantium distinctio porro minima minus corporis deleniti
            dignissimos reprehenderit culpa. Repellat, suscipit nostrum. hic?
          </p>
          <div className="space-x-5">
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 1
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 2
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 3
            </Link>
            <Link to="/site/sobre" className="text-blue-400 hover:underline">
              Link 4
            </Link>
          </div>
        </div>
        <div className="col-span-6 w-full grid place-items-center p-5">
          <img src="https://via.placeholder.com/500" alt="foto" />
        </div>
      </div>

      <form className="w-11/12 md:w-3/5 bg-gray-400 p-5 m-auto my-28">
        <h1 className="text-center text-4xl p-10 font-bold">Fale conosco</h1>
        <div>
          <div className="mb-2 block">
            <Label value="Nome" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="base" value="Telefone" />
          </div>
          <TextInput id="base" type="text" sizing="md" />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="email4" value="Email" />
        </div>
        <TextInput
          type="email"
          icon={HiMail}
          placeholder="fulano@gmail.com"
          required={true}
        />
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Assunto" />
        </div>
        <Textarea
          placeholder="Escreva seu comentário aqui..."
          required={true}
          rows={4}
        />
      </form>
    </div>
  );
}
