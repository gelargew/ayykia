import { animated, useSpring } from '@react-spring/web'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef } from 'react'


export default function MainBg() {
    const [{y}, spring] = useSpring(() => ({
        y: [0],
        config: {
          mass: 1,
          tension: 200,
          friction: 70,
          precision: 0.00001,
          velocity: 0,
          clamp: true
        }
    }));

    const animateMainBg = () => {
        spring.start({y: [-(window.scrollY%window.innerHeight)/4]})
    }
    useEffect(() => {
        window.addEventListener("scroll", animateMainBg);
        return () => window.removeEventListener("scroll", animateMainBg);
    }, [spring]);

    return (
        <animated.div
        id='index-bg-main'
        style={{ transform: y.to(y => `translateY(${y}px)`)}}>
            <StaticImage
            id='img-bg-main'
            alt='living-room'
            src='../images/living-room.jpg'
            placeholder="blurred" 
            />
        </animated.div>
    )
}