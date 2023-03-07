export default function Form() {
  return (
    <form className="flex flex-col gap-4 bg-gray-300 w-full p-5 rounded-md border border-black dark:bg-gray-400 shadow-2xl">
      <div>
        <label className="block font-bold">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Ex: Naruto"
          required={true}
          className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-200"
        />
      </div>
      <div>
        <label className="block font-bold">Sinopse</label>
        <input
          type="text"
          name="sinopse"
          placeholder="Ex: Naruto é um menino que..."
          required={true}
          className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-200"
        />
      </div>

      <button className="bg-blue-500 active:ring active:ring-blue-600 transition duration-300 hover:scale-95 w-full py-3 rounded-xl text-gray-200 font-bold dark:bg-blue-700">
        Enviar
      </button>
    </form>
  );
}
