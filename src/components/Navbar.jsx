import '../css/Navbar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {
    return(
        <nav className="nav-container">
           <NavLink className='a-nav' to='/'>
            <img src='../logo-shop.png' alt='logo' className='logo'/>
           </NavLink>
            <NavLink className='a-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='a-nav' to="/category/ofertas">Ofertas</NavLink>
            <NavLink className='a-nav' to="/category/mas vendidos">Mas vendidos</NavLink> 
            <CartWidget/>
        </nav>
    )
}
export default Navbar