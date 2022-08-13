// Dentro de NavBar.js
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {

    // Lógica

    return (
        <>
            <nav className="NavBar">
                <div>
                    <img className="Img" src='images/logo.png' alt='Logo Materiales Moreno'/>
                    <Link to='/'>
                        Materiales Moreno
                    </Link>
                </div>
                <div className="Categories">
                    <Link to='/category/caneriaAgua' className="Option" color='red'>Cañería agua fusión</Link>
                    <Link to='/category/caneriaDesague' className="Option" color='blue'>Cañería desague PVC</Link>
                    <Link to='/category/hierros' className="Option" color='green'>Hierros</Link>
                </div>
                <CartWidget />
            </nav>
        </>    
    )
}

export default NavBar
