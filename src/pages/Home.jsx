import { LastTransactions } from "../components/LastTransanctions/LastTransactions";
import img from "../images/mockcup1.png";
import { Link } from "react-router";

export const Home = () => {
  const fondo = img;

  return (
    <>
      <div className="relative  text-white w-full lg:h-screen">
        <img
          src={fondo}
          alt="Imagen de fondo"
          className="w-full object-cover lg:h-screen h-96"
        />
        <div className="absolute top-1/4 lg:top-1/3 lg:ml-20 ml-10">
          <p className="lg:text-8xl text-6xl font-semibold">Financer</p>
          <Link
            to="/noter"
            className="bg-white text-black p-3 rounded-lg relative top-5"
          >
            Comenzar
          </Link>
          <p className="relative top-10 lg:text-xl">
            Necesitas ayuda?
            <Link
              to="/help"
              className="text-blue-400 ml-2 border-b border-blue-400"
            >
              Click aqui
            </Link>
          </p>
        </div>
      </div>
      <div className=" text-white w-4/5 mb-4 items-center text-center">
        <p className="lg:text-4xl text-2xl font-semibold mt-10">
          Controla tus finanzas de manera sencilla
        </p>
        <p className="mt-2">Tus ultimos registros</p>
      </div>
      <LastTransactions />
    </>
  );
};
