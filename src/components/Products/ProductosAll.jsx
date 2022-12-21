import { useState, useEffect ,useContext} from "react"
import { Producto } from "./Producto";
import styles from './ProductosAll.module.css'
import { ProductCont } from "../../context/ProductContext";

export const ProductosAll = () => {
    const [onSelect, setOnSelect] = useState("");
    const {Products,getProducts} = useContext(ProductCont)


    // useEffect(() => {
    //     getProducts()
    // }, [])
    
   
    const handleChange = ({ target }) => {

        setOnSelect(target.value)

    }
    let array = []
    !onSelect ? array = Products : array = Products.filter(item => item.category ===onSelect )
    return (
        <div id="product">
            <div className={styles.cardBox}>
                <h1>PRODUCTOS</h1>
                <label htmlFor="">Filtrado por Categoria</label>
            <select className={styles.select} onChange={handleChange}>
                <option value="" select="true">All</option>
                <option value="men's clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
            </select>
                <div className={styles.cardContainer}>
                    {array.map(item => {
                        return (
                            <div key={item.id}>
                                <Producto
                                    {...item}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
