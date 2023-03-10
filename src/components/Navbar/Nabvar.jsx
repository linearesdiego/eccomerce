
import styles from './Nabvar.module.css'
import carritoImg from '../../assets/carrito.png'
import searchImg from '../../assets/search.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProductCont } from '../../context/ProductContext'


export const Nabvar = () => {
    const navigate = useNavigate()

    const  HandleClick = ()=> {
        navigate('/carrito')
    }
  const {Counts } = useContext(ProductCont)
    
    return (
        <header className={styles.boxNav}>
            <nav className={styles.nav}>
                <a href="#hero">Home</a>
                <a href="#product">Produts</a>
                <a href="#">Contact</a>
            </nav>
            <h1>Eccomerce<span className={styles.name}>Diego</span> </h1>
            <div className={styles.imgCarrito}>
                <img onClick={HandleClick} src={carritoImg} alt="carrito" />  
                <div className={styles.circle}>{Counts}</div>
                <div className={styles.searchInput}>
                    <input type="text" placeholder="Buscar.." /> 
                    <div className={styles.search}>
                        <img src={searchImg} alt='carrito' />
                    </div>
                </div>
            </div>
        </header>
    )
}
