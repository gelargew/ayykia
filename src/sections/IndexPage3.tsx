import React from 'react'
import LAMP1 from '../images/lamp1.jpg'

export default function IndexPage3() {

    return (
        <section id='index-page-3'>
            <div id='id3-left'>
                <img src={LAMP1} />
            </div>
            <div id='id3-right'>
                <h2>LAMP</h2>
                <p>Explore all types of lamps from tripod lamp, goose lamp, buffet lamp and more.</p>
            </div>
        </section>
    )
}