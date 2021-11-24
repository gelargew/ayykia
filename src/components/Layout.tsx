import React from 'react'
import '../styles/layout.css'

export default function Layout({ children }: { children: any }) {

    return (
        <div>
            <div style={{zIndex: 10, position: 'fixed'}}>
                <header>
                    <button>SHOP</button>
                    <h1>AYYKIA</h1>
                    <button>CONTACT US</button>
                </header>
            </div>
            {children}
        </div>
    )
}

const DropDown = () => {

    return (
        <div>

        </div>
    )
}