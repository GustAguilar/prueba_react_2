import { NavLink } from "react-router-dom"
import "../assets/Navbar.css"

const Navbar = () => { 
    const setActivo = ({ isActive }) => (isActive ? "activo" : undefined)
    return (
    <nav className="navbar">
      < div className="elementosNavbar"> 
         <NavLink to="/" className={setActivo}>🍕Pizzería Mamma Mía!</NavLink> 
         <NavLink to="/Carrito"  className={setActivo}>🛒 Ver Carrito</NavLink> 
      </div>
    </nav>
    )
}

export default Navbar