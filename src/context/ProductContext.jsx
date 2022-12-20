import React, { useEffect, useState } from "react"
import axios from "axios";


export const ProductCont = React.createContext('')

export const ProductContext = ({children}) => {
    const [Products, setProducts] = useState([]);

    const getProducts = async () => {
        await axios.get('https://fakestoreapi.com/products', {
            method: 'GET'
        })
        .then(response => response.data)
        .then((datos) => {
            setProducts(datos)
            console.log(datos)
        })
        .catch((err) => {
            console.log("ERROR API", err)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    
    
    const getProductId = (id)=> {
        // console.log(id)
        return Products.find(item => item.id == id)
    }


  return (

    <ProductCont.Provider value={{
        Products,
        setProducts,
        getProductId,
        getProducts
    }}>
        {children}
    </ProductCont.Provider>
  )
}
