import React from 'react'

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
                    <img src={product.imageURL} />
                    <h3>{product.name}</h3>
                    <small>{product.price}</small>
                </div>)}
        </div>
    )
}