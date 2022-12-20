import React from 'react'
import { Footer } from '../Footer/Footer'
import { Hero } from '../Hero/Hero'
import { ProductosAll } from '../Products/productosAll'

export const Home = () => {
    return (
        <div>
            <Hero />
            <ProductosAll />
            <Footer />
        </div>
    )
}
