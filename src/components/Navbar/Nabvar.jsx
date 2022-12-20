
import styles from './Nabvar.module.css'
import carritoImg from '../../assets/carrito.png'
import searchImg from '../../assets/search.png'

export const Nabvar = () => {
    return (
        <header className={styles.boxNav}>
            <nav className={styles.nav}>
                <a href="#hero">Home</a>
                <a href="#product">Produts</a>
                <a href="#">Contact</a>
            </nav>
            <h1>Eccomerce<span className={styles.name}>Diego</span> </h1>
            <div className={styles.imgCarrito}>
                <img src={carritoImg} alt="carrito" />  
                
                <div className={styles.searchInput}>
                    <input type="text" placeholder="Buscar.." /> 
                    <div className={styles.search} >
                        <img src={searchImg} alt="" />
                    </div>
                </div>
            </div>
        </header>
    )
}
