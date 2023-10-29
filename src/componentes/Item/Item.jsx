import style from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id,name,price,img}) =>{
    return(
        <article className={style.article}>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} className={style.img}/>
            </picture>
            <section>
                <p>Precio:{price}</p>
            </section>
            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}
export default Item