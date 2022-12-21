import React, { useContext } from 'react'
import { ProductCont } from '../../context/ProductContext'
import styles from './Carrito.module.css'



export const Carrito = () => {
  const { addProductCarrito,deleteCarrito } = useContext(ProductCont)

  return (
    <div className={styles.boxCarrito}>
      <div className={styles.containerCarrito}>
      {addProductCarrito.map(item => {
        return (
          <div key={item.id} className={styles.itemCarrito} >
            <div className={styles.imgLeft}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.textRight}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>${item.price}</span>
              <button onClick={()=>deleteCarrito(item.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}
