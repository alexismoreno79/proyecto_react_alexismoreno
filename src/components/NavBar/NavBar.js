// Dentro de NavBar.js
import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    // Lógica

    return (
        <>
            <nav className="Navbar">
                <div>
                    <h1>Materiales Moreno</h1>
                    <img className="Img" src='images/logo.png' alt='Logo Materiales Moreno'/>
                </div>
                <div>
                    <Button color='red'>Cañería agua fusión</Button>
                    <Button color='blue'>Cañería desague PVC</Button>
                    <Button color='green'>Hierros</Button>
                </div>
                <CartWidget />
            </nav>
        </>    
    )
}

export default NavBar