import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductosAll.module.css'
import { ProductCont } from '../../context/ProductContext'

export const Producto = ({
  id: id,
  title: title,
  image: image,
  description: description,
  category: category,
  price: price

}) => {

  const {addCarrito} = useContext(ProductCont)
  return (
    <div className={styles.cardItem}>
        <div className={styles.Imagen}>
          <img src={image} alt={category} />
        </div>

        <h3>{title}</h3>
        <p>{description.slice(0,100)}</p>
        <p> Precio: <span>${price}</span></p>
        <div className={styles.buttonContainer}>
          <button className={styles.addCarrito} onClick={()=>addCarrito({id,title,image,price})}>Agregar al carrito</button>
          <Link to={`/producto/${id}`}>Ver mas..</Link>
        </div>
    </div>
  )
}
