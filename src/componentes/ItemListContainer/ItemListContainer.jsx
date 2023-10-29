import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({titulo}) =>{
    const[ product, setProduct] = useState([])

    useEffect(() =>{
        getProduct()
                .then( response =>{
                    setProduct(response)
                })
    },[])
    return(
        <div>
            <h1>{titulo}</h1>
            <ItemList products={product}/>
        </div>
    )
}

export default ItemListContainer 