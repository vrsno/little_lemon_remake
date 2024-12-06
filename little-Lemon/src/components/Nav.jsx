import "./nav.css"
import littlelemon_logo from "../assets/littlelemon_logo.png"
import { Link } from "react-router-dom"


export function Nav(){
    return(
        <nav className="navbar">
            <div className="navbar_content">
            <div className="navbar_logo_container">
            <img className="navbar_logo" src={littlelemon_logo} alt="little lemon logo" />
            </div>
            <ul className="navbar_menu">
                <li className="navbar_item"><Link to="/">Home</Link></li>
                <li className="navbar_item" ><Link to="/about">About</Link></li>
                <li className="navbar_item"><Link to="/menu">Menu</Link></li>
                <li className="navbar_item"><Link to="/reservation">Reservations</Link></li>
                <li className="navbar_item"><Link to="/order-online">Order Online</Link></li>
                <li className="navbar_item"><Link to="/login">Login</Link></li>
            </ul>
            </div>
        </nav>
    )
}