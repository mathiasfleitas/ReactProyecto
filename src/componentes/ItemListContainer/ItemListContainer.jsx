import { useState, useEffect } from "react"
import { getProduct } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({titulo}) =>{
    const[ product, setProduct] = useState([])

    useEffect(() =>{
        getProduct()
                .then( response =>{
                    setProduct(response)
                })
                .catch( error =>{
                    setProduct(error)
                } )
    },[])
    return(
        <div>
            <h2>{titulo}</h2>
            <ItemList product={product}/>
        </div>
    )
}

export default ItemListContainer 