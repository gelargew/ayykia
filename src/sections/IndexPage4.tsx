import React from 'react'
import SpringTopBotDiv from '../components/SpringTopBotDiv'


const ITEMS = [
    {
        title: 'BEDROOM - MODERN STYLE',
        imageURL: '/images/bedroom.jpg',
        color: 'gray'
    },
    {
        title: 'KITCHEN',
        imageURL: '/images/kitchen.jpg',
        color: 'gray'
    },
    {
        title: 'LIVING ROOM - MODERN STYLE',
        imageURL: '/images/living-room-modern.jpg',
        color: 'gray'
    },
    {
        title: 'LIVING ROOM - VINTAGE STYLE',
        imageURL: '/images/vintage-room.jpg',
        color: 'gray'
    }
]


export default function IndexPage4() {


    return (
        <section id='index-page-4'>
            <h2 style={{}}>FURNITURE SETS</h2>
            {ITEMS.map(item => 
                <div key={item.title}>{item.title}</div>)}
        </section>
    )
}


