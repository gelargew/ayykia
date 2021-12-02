import React from 'react'
import { useLayoutContext } from '../components/Layout'


export default function IndexPage7() {
    const {navigateHome} = useLayoutContext()

    return (
        <section id='footer'>
            <nav className='footer-nav'>
                <div>
                    <h3>AYYKIA</h3>
                    <a onClick={navigateHome} style={{opacity: 0.8}}>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <a>All</a>
                    <a>Featured</a>
                    <a>Sets</a>
                    <a></a>
                </div>
                <div>
                    <h3>SETS</h3>
                    <a>Living Room</a>
                    <a>Bedroom</a>
                    <a>Kitchen</a>
                    <a>Office Room</a>
                </div>
            </nav>
            <h1>Ayykia</h1>
            <div id='credits'><p>© AYYKIA | 2021</p><p>
                DESIGN & DEV : 
                <a style={{opacity: 0.9, textDecoration: 'underline'}} href='https://gelar.vercel.app/' target='_blank'>
                    Gelar Rustiawan
                </a>
                </p>
            </div>
        </section>
    )

}