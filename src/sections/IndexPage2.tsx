import React from 'react'
import { ScrollComponent } from '../components/ScrollComponent'
import LV from '../images/living-room.jpg'


export default function IndexPage2() {


    return (
        <section id='index-page-2'>
            <h2>
                CREATING A BETTER LIFE AT HOME
            </h2>
            <p>
                we have a passion for home furnishing and an inspiring shared vision: to create 
                a better everyday life for the many people. This, together with our straightforward 
                business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.
            </p>
            <SurroundingImages />
        </section>
    )
}


const SurroundingImages = () => {

    return (
        <div id='index-2-images'>
            <ScrollComponent id='id2-img1' />
            <ScrollComponent id='id2-img5' speed={0.08} />
            <ScrollComponent id='id2-img3' speed={0.05} />
            <ScrollComponent id='id2-img2' speed={0.04} />   
            <ScrollComponent id='id2-img4' speed={0.03} />
            
        </div>
    )

}