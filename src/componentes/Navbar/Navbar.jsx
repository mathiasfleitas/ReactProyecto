import CartWidget from "../CartWidget/CartWidget"

const Navbar = () =>{
    return(
        <nav>
            <h1>MF Tecnologia</h1>
         <ul>
            <li>
                <a href="">Mobo</a>
            </li>
            <li>
                <a href="">Procesador</a>
            </li>
            <li>
                <a href="">Accesorios</a>
            </li>
            <li>
                <a href="">Contacto</a>
            </li>
         </ul>
         <CartWidget/>
        </nav>
    )
}

export default Navbar