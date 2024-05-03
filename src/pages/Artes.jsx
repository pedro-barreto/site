import arte01 from "../img/grid/grid01.jpg"; //600x200
import arte02 from "../img/grid/grid02.jpg"; //600x600
import arte03 from "../img/grid/grid03.jpg"; //300x400
import arte04 from "../img/grid/grid04.jpg"; //300x200
import arte05 from "../img/grid/grid05.jpg"; //300x200
import arte06 from "../img/grid/grid06.jpg"; //800x400
import arte07 from "../img/grid/grid07.jpg"; //400x400
import arte08 from "../img/grid/grid08.jpg"; //300x200
import arte09 from "../img/grid/grid09.jpg"; //300x200
import arte10 from "../img/grid/grid10.jpg"; //300x200
import arte11 from "../img/grid/grid11.jpg"; //300x200
import arte12 from "../img/grid/grid12.jpg"; //300x300
import arte13 from "../img/grid/grid13.jpg"; //300x600
import arte14 from "../img/grid/grid14.jpg"; //600x200
import arte15 from "../img/grid/grid15.jpg"; //600x200
import arte16 from "../img/grid/grid16.jpg"; //300x300
import arte17 from "../img/grid/grid17.jpg"; //600x200

export default function Acessorios() {
  const secao =
    "w-full aspect-grid grid grid-cols-12 grid-rows-6 border-4 border-black bg-white";
  const titulo =
    "text-center text-4xl sm:text-5xl font-bold font-nippo dark:text-gray-200 py-14";
  const styleImg = "w-full h-full object-cover p-1 sm:p-2 ";

  return (
    <div className="w-full px-3 pb-14 pt-0 sm:p-14 sm:pt-0 bg-cor2 dark:bg-gray-600">
      <h1 className={titulo}>ARTE 1</h1>

      <section className={secao}>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <img src={arte01} className={styleImg} alt="" />
        </div>
        <div className="row-span-6 col-span-6 border-2 border-black">
          <img src={arte02} className={styleImg} alt="" />
        </div>
        <div className="row-span-4 col-span-3 border-2 border-black">
          <img src={arte03} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <img src={arte04} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <img src={arte05} className={styleImg} alt="" />
        </div>
      </section>

      <h1 className={titulo}>ARTE 2</h1>

      <section className={secao}>
        <div className="row-span-4 col-span-8 border-2 border-black">
          <img src={arte06} className={styleImg} alt="" />
        </div>
        <div className="row-span-4 col-span-4 border-2 border-black">
          <img src={arte07} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <img src={arte08} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black ">
          <img src={arte09} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <img src={arte10} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-3 border-2 border-black">
          <img src={arte11} className={styleImg} alt="" />
        </div>
      </section>

      <h1 className={titulo}>ARTE 3</h1>

      <section className={secao}>
        <div className="row-span-3 col-span-3 border-2 border-black">
          <img src={arte12} className={styleImg} alt="" />
        </div>
        <div className="row-span-6 col-span-3 border-2 border-black">
          <img src={arte13} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <img src={arte14} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <img src={arte15} className={styleImg} alt="" />
        </div>
        <div className="row-span-3 col-span-3 border-2 border-black">
          <img src={arte16} className={styleImg} alt="" />
        </div>
        <div className="row-span-2 col-span-6 border-2 border-black">
          <img src={arte17} className={styleImg} alt="" />
        </div>
      </section>
    </div>
  );
}
