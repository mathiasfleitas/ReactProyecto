import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)
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
                    <button onClick={Decrement}>-</button>
                    <h4>{quantity}</h4>
                    <button onClick={Incremente}>+</button>
                </div>
                 <div>
                    <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar a Carrito</button>
                </div>   
            </div>

    )

}
export default ItemCount
