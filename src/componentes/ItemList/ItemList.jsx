import Item from '../Item/Item'
import style from './ItemList.module.css'

const ItemList = ({ products }) => {
    return (
        <div className={style.div}>
            {
                products.map(prod => {
                    return (
                        <Item key={prod.id} {...prod}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList