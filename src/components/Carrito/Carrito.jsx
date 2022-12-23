import React, { useContext } from 'react'
import { ProductCont } from '../../context/ProductContext'
import styles from './Carrito.module.css'



export const Carrito = () => {
  const { addProductCarrito, deleteCarrito, Total, clearCarrito } = useContext(ProductCont)

  return (

    <>
      <div className={styles.btnCarrito}>
        <p className={styles.total}> Tota a Pagar: ${Total}</p>
        <button onClick={clearCarrito}> Limpiar Carrito</button>
      </div>
      <div className={styles.boxCarrito}>

        {addProductCarrito == 0
          ?
          <p className={styles.Cartel}>No agrego ningun producto al carrito</p>
          :

          <div className={styles.containerCarrito}>
            {addProductCarrito.map( item => {
              return (
                <div key={item.id} className={styles.itemCarrito} >
                  <div className={styles.imgLeft}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={styles.textRight}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <span>${Math.round(item.price)}</span>
                    <span>Cantidad: {item.cantidad}</span>
                    <button onClick={() => deleteCarrito(item.id, item.price,item.cantidad)}>Delete</button>
                  </div>
                </div>
              )
            })}
          </div>
        }
      </div>
    </>
  )
}
