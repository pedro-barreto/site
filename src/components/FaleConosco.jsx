export default function FaleConosco() {
  return (
    <form className="w-11/12 lg:w-3/5 bg-gray-300 p-5 m-auto mt-14 sm:mt-28 rounded-2xl border border-black dark:bg-gray-400 shadow-2xl">
      <h1 className="text-center text-3xl sm:text-4xl py-10 font-bold dark:text-gray-300">
        FALE CONOSCO
      </h1>
      <div className="space-y-5">
        <div>
          <label className="block font-bold">Nome completo</label>
          <input
            type="text"
            required={true}
            className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-100"
          />
        </div>
        <div>
          <label className="block font-bold">Telefone</label>
          <input
            type="text"
            required={true}
            className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-100"
          />
        </div>
        <div>
          <label className="block font-bold">Email</label>
          <input
            type="email"
            required={true}
            className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-100"
          />
        </div>
        <div>
          <label className="block font-bold">Assunto</label>
          <textarea
            name="assunto"
            rows={6}
            required={true}
            className="w-full rounded-md dark:bg-slate-500 dark:text-gray-100 dark:placeholder:text-gray-100"
          />
        </div>
        <button className="bg-blue-500 active:ring active:ring-blue-600 transition duration-300 hover:scale-95 w-full py-3 rounded-xl text-gray-200 font-bold dark:bg-blue-700">
          Enviar
        </button>
      </div>
    </form>
  );
}
