import CartWidget from "../CartWidget/CartWidget"
import style from './Nav.module.css'

const Navbar = () =>{
    return(
        <nav className={style.nav}>
            <h1 className={style.titulo}>MF Tecnologia</h1>
         <ul className={style.display}>
            <li>
                <a href="" className={style.color}>Motherboard</a>
            </li>
            <li>
                <a href="" className={style.color}>Procesador</a>
            </li>
            <li>
                <a href="" className={style.color}>Accesorios</a>
            </li>
            <li>
                <a href="" className={style.color}>Contacto</a>
            </li>
            <CartWidget/>
         </ul>
         
        </nav>
    )
}

export default Navbar