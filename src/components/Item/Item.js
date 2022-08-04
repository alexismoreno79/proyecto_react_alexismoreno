const Item = ({ product }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
            <button>Ver detalle del producto</button>
            <h6>Stock disponible: {product.stock}</h6>
        </li>
    )
}
    
export default Item
    