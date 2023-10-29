import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const[ product, setProducto] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then(response=>{
                setProducto(response)
            }) 
    },[itemId])

    return(
        <div>
            <h1>Detalle del prducto</h1>
            <ItemDetail {...product}/>
        </div>
    )
 }

 export default ItemDetailContainer