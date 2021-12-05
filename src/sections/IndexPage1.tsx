import React, { useEffect, useRef } from 'react'
import { useLayoutContext } from '../components/Layout'
import useOnScreen from '../utils/useOnscreen'
import { useScrollContext } from '../components/ScrollWrapper'
import { animated } from '@react-spring/web'
import { StaticImage } from 'gatsby-plugin-image'

export default function IndexPage1() {
    const ref = useRef<HTMLDivElement>()
    const onScreen = useOnScreen(ref, '-10%')
    const {setIsOpaque} = useLayoutContext()
    const {y} = useScrollContext()


    useEffect(() => {
        setIsOpaque(!onScreen)
    }, [onScreen])
    

    return (
        <section id='index-page-1' ref={ref}>
            <animated.div id='main-bg' style={{transform: y.to(y => `translateY(${-y/2}px)`)}}>
                <StaticImage
                id='static-main-bg'
                alt='living-room'
                src='../images/living-room.jpg'
                placeholder="blurred" />
            </animated.div>
            <img className='scroll-arrow' src='/arrow.svg' />
            <h1 id='hero-text'>AYYKIA</h1> 

        </section>
    )
}