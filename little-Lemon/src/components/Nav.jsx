import "./nav.css"
import littlelemon_logo from "../assets/littlelemon_logo.png"

export function Nav(){
    return(
        <nav className="navbar">
            <div className="navbar_content">
            <div className="navbar_logo_container">
            <img className="navbar_logo" src={littlelemon_logo} alt="little lemon logo" />
            </div>
            <ul className="navbar_menu">
                <li className="navbar_item"><a href="Home">Home</a></li>
                <li className="navbar_item" ><a href="About">About</a></li>
                <li className="navbar_item"><a href="Menu">Menu</a></li>
                <li className="navbar_item"><a href="Reservations">Reservations</a></li>
                <li className="navbar_item"><a href="Order-Online">Order Online</a></li>
                <li className="navbar_item"><a href="Login">Login</a></li>
            </ul>
            </div>
        </nav>
    )
}