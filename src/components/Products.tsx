import React from 'react'
import '../styles/products.css'

interface productProps {
    name: string,
    imageURL: string,
    price: number
}

interface productsProps {
    products: productProps[]
} 

export default function Products({ products }: productsProps) {


    return (
        <div className='products'>
            {products.map(product => 
                <div className='product'>
                    <div className='product-image'>
                        <img src={product.imageURL} />
                    </div>
                    <h3>{product.name}</h3>
                    <small>{product.price}</small>
                </div>)}
        </div>
    )
}