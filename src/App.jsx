import { Route, Routes } from "react-router-dom"
import { Carrito } from "./components/Carrito/Carrito"
import { Home } from "./components/Home/Home"
import { Nabvar } from "./components/Navbar/Nabvar"
import { ProductoId } from "./components/ProductoId/ProductoId"
import { ProductContext } from "./context/ProductContext"

function App() {
  return (

      <ProductContext>
      <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductoId />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </ProductContext>
  )
}

export default App
