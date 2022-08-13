// Dentro de ItemListContainer.js
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })
    }, [categoryId])

    return (
        <>
            <div className="ContenedorDeLaLista">
                <h1>{greeting}</h1>
                <ItemList products={products}/>
            </div>
        </>
    )
}

export default ItemListContainer
