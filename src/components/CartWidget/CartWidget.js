// Dentro de CartWidget.js
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <Link to='/cart' className="CartWidget">
            <img src='/images/carrito32.png' alt='CartWidget' className='CartImg'/>
            { quantity }
        </Link>
    );
}

export default CartWidget