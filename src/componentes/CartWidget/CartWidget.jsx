import cart from './assets/cart4.svg'
import style from './Car.module.css'

const cont = 0

const CartWidget = () =>{
    return(
    <> 
        <button className={style.button}>
           <img src={cart} className={style.img}/>
           
        </button>
        <section className={style.section}>0</section>
    </>
    )

}

export default CartWidget