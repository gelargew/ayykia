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
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h3>SHOP</h3>
                    <p>All</p>
                    <p>Featured</p>
                    <p>Sets</p>
                    <p></p>
                </div>
                <div>
                    <h3>SETS</h3>
                    <p>Living Room</p>
                    <p>Bedroom</p>
                    <p>Kitchen</p>
                    <p>Office Room</p>
                </div>
            </nav>
            <h1>Ayykia</h1>
            <div id='credits'><p>© AYYKIA | 2021</p><p>
                DESIGN & DEV : 
                <a rel='noopener' style={{opacity: 0.9, textDecoration: 'underline'}} href='https://gelar.vercel.app/' target='_blank'>
                    Gelar Rustiawan
                </a>
                </p>
            </div>
        </section>
    )

}