import img from "../images/mockcup1.png";
import { Link } from "react-router";

export const Home = () => {
  const fondo = img;

  return (
    <>
      <div className="relative  text-white w-full h-screen">
        <img
          src={fondo}
          alt="Imagen de fondo"
          className="w-full max-h-screen object-cover"
        />
        <div className="absolute top-1/3 ml-20">
          <p className="text-8xl font-semibold">Financer</p>
          <p className="text-4xl">Tus finanzas al alcance de tu mano</p>
          <Link
            to="/noter"
            className="bg-white text-black p-3 rounded-lg relative top-5"
          >
            Comenzar
          </Link>
        </div>
      </div>
    </>
  );
};
