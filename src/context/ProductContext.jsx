import React, { useEffect, useState } from "react"
import axios from "axios";


export const ProductCont = React.createContext('')

export const ProductContext = ({children}) => {
    const [Products, setProducts] = useState([]);
    const [addProductCarrito, setaddProductCarrito] = useState([])
    const [Total, setTotal] = useState(0)

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
        console.log(object)

        setaddProductCarrito([...addProductCarrito, object])
        setTotal(Total + Math.round(object.price) )
    }
    const deleteCarrito = (id, price)=> {
        // console.log(price,id)
        let filter =  addProductCarrito.filter(item => item.id != id)
        setaddProductCarrito(filter)
        setTotal(Total - Math.round(price) )

    }
    const clearCarrito = ()=> {
        setaddProductCarrito([])
        setTotal(0)
    }
    // console.log(addProductCarrito)
    // console.log(Total)
  return (

    <ProductCont.Provider value={{
        Products,
        addProductCarrito,
        Total,
        setProducts,
        getProductId,
        getProducts,
        addCarrito,
        deleteCarrito,
        clearCarrito,
        
    }}>
        {children}
    </ProductCont.Provider>
  )
}
