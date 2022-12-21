import React, { useEffect, useState } from "react"
import axios from "axios";


export const ProductCont = React.createContext('')

export const ProductContext = ({children}) => {
    const [Products, setProducts] = useState([]);
    const [addProductCarrito, setaddProductCarrito] = useState([])

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
    const addCarrito = (object)=> {
        setaddProductCarrito([...addProductCarrito, object])
    }
    const deleteCarrito = (id)=> {
        console.log(id)
        let filter =  addProductCarrito.filter(item => item.id != id)
        setaddProductCarrito(filter)
    }
    // console.log(addProductCarrito)
  return (

    <ProductCont.Provider value={{
        Products,
        addProductCarrito,
        setProducts,
        getProductId,
        getProducts,
        addCarrito,
        deleteCarrito
    }}>
        {children}
    </ProductCont.Provider>
  )
}
