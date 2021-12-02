import React from 'react'
import SpringTopBotDiv from '../components/SpringTopBotDiv'


const ITEMS = [
    {
        title: 'BEDROOM - MODERN STYLE',
        imageURL: '/images/bedroom.jpg',
        color: 'gray'
    },
    {
        title: 'LIVING ROOM - MODERN STYLE',
        imageURL: '/images/living-room-modern.jpg',
        color: 'gray'
    }/* ,
    {
        title: 'LIVING ROOM - VINTAGE STYLE',
        imageURL: '/images/vintage-room.jpg',
        color: 'gray'
    } */
]


export default function IndexPage4() {


    return (
        <section id='index-page-4'>
            {ITEMS.map(item => 
                <FurnitureSet key={item.imageURL} item={item} />)}
        </section>
    )
}



interface theProps extends React.HTMLProps<HTMLDivElement> {
    item: typeof ITEMS[0]
}

const FurnitureSet = ({item, className, ...props}: theProps) => {

    return (
        <div 
        {...props} 
        className={`furniture-set ${className}`}
        >
            <h2>FURNITURE SETS</h2>
            <div className='furniture-set-image'>
                <img src={item.imageURL} />
                <h3>{item.title}</h3>
            </div>
           
            
        </div>
    )
}
