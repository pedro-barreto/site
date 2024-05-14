import artes from "../img/grid";
import { Image } from "primereact/image";

export default function Acessorios() {
  const secao =
    "w-full aspect-grid grid grid-cols-12 grid-rows-6 border-4 border-black bg-white";
  const titulo =
    "text-center text-4xl sm:text-5xl font-bold font-nippo dark:text-gray-200 py-14";
  const styleImg = "image size-full p-1 sm:p-2 ";

  return (
    <main className="w-full full px-3 pb-14 pt-0 sm:p-14 sm:pt-0 bg-cor2 dark:bg-gray-600">
      <h1 className={titulo}>ARTE 1</h1>

      <section className={secao}>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <Image src={artes[0]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-6 col-span-6 border-2 border-black">
          <Image src={artes[1]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-4 col-span-3 border-2 border-black">
          <Image src={artes[2]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <Image src={artes[3]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <Image src={artes[4]} className={styleImg} alt="" preview />
        </div>
      </section>

      <h1 className={titulo}>ARTE 2</h1>

      <section className={secao}>
        <div className="row-span-4 col-span-8 border-2 border-black">
          <Image src={artes[5]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-4 col-span-4 border-2 border-black">
          <Image src={artes[6]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <Image src={artes[7]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black ">
          <Image src={artes[8]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <Image src={artes[9]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <Image src={artes[10]} className={styleImg} alt="" preview />
        </div>
      </section>

      <h1 className={titulo}>ARTE 3</h1>

      <section className={secao}>
        <div className="row-span-3 col-span-3 border-2 border-black">
          <Image src={artes[11]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-6 col-span-3 border-2 border-black">
          <Image src={artes[12]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <Image src={artes[13]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <Image src={artes[14]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-3 col-span-3 border-2 border-black">
          <Image src={artes[15]} className={styleImg} alt="" preview />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <Image src={artes[16]} className={styleImg} alt="" preview />
        </div>
      </section>
    </main>
  );
}
