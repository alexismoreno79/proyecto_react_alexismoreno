// Dentro de ItemList.css
import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <ul className="ItemList">
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </ul>
    )
}

export default ItemList
