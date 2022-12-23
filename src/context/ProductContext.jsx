import React, { useEffect, useState } from "react"
import axios from "axios";
import swal from 'sweetalert';


export const ProductCont = React.createContext('')

export const ProductContext = ({ children }) => {
    const [Products, setProducts] = useState([]);
    const [addProductCarrito, setaddProductCarrito] = useState([])
    const [Total, setTotal] = useState(0)
    const [Counts, setCounts] = useState(0)

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


    const getProductId = (id) => {
        // console.log(id)
        return Products.find(item => item.id == id)
    }

    const addCarrito = (object) => {
        swal({
            title: "Se agrego al carrito",
            icon: "success",
            button: "OK",
          });
          
        if (addProductCarrito.some(item => item.id === object.id)) {
            

        }


        setCounts(Counts + object.cantidad)
        setaddProductCarrito([...addProductCarrito, object])
        setTotal(Total + Math.round(object.price))
}
    const deleteCarrito = (id, price, cantidad) => {
        // console.log(price,id)
        let filter = addProductCarrito.filter(item => item.id != id)
        setaddProductCarrito(filter)
        setTotal(Total - Math.round(price))
        setCounts(Counts - cantidad)

    }
    const clearCarrito = () => {
        swal({
            title: "Estas seguro que quieren eliminar todos los productos del carrito?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                setaddProductCarrito([])
                setTotal(0)
                setCounts(0)
              swal("Se eliminaro correctamente", {
                icon: "success",
              });
            } else {
              swal("Se cancelo");
            }
          });
          

    }
    // console.log(addProductCarrito)
    // console.log(Total)

    return (

        <ProductCont.Provider value={{
            Products,
            addProductCarrito,
            Total,
            Counts,
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
