import food1 from '../assets/food1.avif'
import './header.css'
export function Header(){
    return (
        <header className="header">
            <div className="header_container">
                <h1>little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button>Reserve a Table</button>
            </div>
            <div className="header_logo_container">
            <img className='header_img' src={food1} alt="food" />
            </div>
        </header>
    )
}