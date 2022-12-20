import { Route, Routes } from "react-router-dom"
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
        </Routes>
      </ProductContext>
  )
}

export default App
