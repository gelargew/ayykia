import React from 'react'
import Products from '../components/Products'


const PRODUCTS = [
    {
        name: 'Armless white chair',
        imageURL: '/images/chair1.jpg',
        price: 999
    }
]

export default function IndexPage5() {

    return (
        <section id='index-page-5'>
            <Products products={PRODUCTS} />
        </section>
    )

}