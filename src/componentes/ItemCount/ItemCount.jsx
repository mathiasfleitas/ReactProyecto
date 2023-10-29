import { useState } from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ({stock,onAdd}) => {
    const [quantity, setQuantity] = useState(1)
    const Incremente = () =>{
        if(quantity < stock){
            setQuantity(quantity +1)
        }
    } 

    const Decrement = () =>{
        if(quantity > 1){
            setQuantity(quantity -1)
        }
    }

    return(
            <div>
                <div>
                    <h4>{quantity}</h4>
                    <Button onClick={Decrement} variant="primary">-</Button>
                    <Button onClick={() => onAdd(quantity)}variant="primary">Agregar al carrito</Button>
                    <Button onClick={Incremente}variant="primary">+</Button>
                </div>   
            </div>

    )

}
export default ItemCount
