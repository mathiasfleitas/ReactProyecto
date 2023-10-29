import ItemCount from "../ItemCount/ItemCount"
import style from './ItemDetail.module.css'
const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
 
    return (
        <article className={style.article}>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={style.img}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                <ItemCount stock={stock}/>
            </footer>
        </article>
    )
}

export default ItemDetail