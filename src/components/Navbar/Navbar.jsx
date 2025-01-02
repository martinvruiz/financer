import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-indigo-600 shadow-xl h-14 w-full text-white flex items-center justify-center">
        <Link to="/" className="border-b m-1 border-white p-1">
          Inicio
        </Link>
        <Link to="/noter" className="border-b m-1 border-white p-1">
          Anotador
        </Link>
        <Link to="/list" className="border-b m-1 border-white p-1">
          Registros
        </Link>
      </nav>
    </>
  );
};
