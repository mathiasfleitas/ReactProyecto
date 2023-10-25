const Item = ({id,name,price,stock, img}) =>{
    return(
        <article>
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>Precio:{price}</p>
                <p>Stock Disponible:{stock}</p>
            </section>
            <footer>
                <button>Ver detalle</button>
            </footer>
        </article>
    )
}
export default Item