import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductCont } from '../../context/ProductContext'
import styles from './ProductoId.module.css'

export const ProductoId = () => {
    const {id} = useParams()
    const {getProductId} = useContext(ProductCont)
  
   const valor = getProductId(id)
  return (
    <div className={styles.boxProduct}>
      <div className={styles.container}>

        <div className={styles.containerLeft}>
          <img src={valor?.image} alt={valor?.title} />
        </div>
        <div className={styles.containerRight}>
          <h1>{valor?.title}</h1>
          <p>{valor?.description}</p>
          <span>${valor?.price}</span>
          <div className={styles.containerButton}>

          <button className={styles.addCarrito}>Agregar al carrito</button>
          <Link className={styles.addCarrito} to={`/`}>Volver</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
