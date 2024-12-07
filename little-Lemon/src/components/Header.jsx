import food1 from '../assets/food1.avif'
import './header.css'
export function Header(){
    return (
        <header className="header">
            
            <div className="header_container">
                <h1 className='header_title'>Little Lemon</h1>
                <h2 className='header_sub'>Chicago</h2>
                <p className='header_para'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button className='header_btn btn-def' >Reserve a Table</button>
                <div className="header_logo_container">
            <img className='header_img' src={food1} alt="food" />
            </div>
            </div>
            
            <div className='header_right'></div>
        </header>
    )
}