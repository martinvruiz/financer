import { Link } from "react-router"


export const Navbar = ()=>{


    return <>
    
        <nav className="bg-blue-600 h-14 w-full text-white flex items-center justify-center">
            <Link to="/" className="border-b border-white p-1">Inicio</Link>
        </nav>

    </>
}