// Dentro de CartWidget.js
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return(
        <Link to='/cart' className="CartWidget">
            <img src='/images/carrito32.png' alt='CartWidget' className='CartImg'/>
            10
        </Link>
    );
}

export default CartWidget