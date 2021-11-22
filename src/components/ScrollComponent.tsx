import React, { useEffect, useRef } from 'react'
import { useSpring } from '@react-spring/web';
import { animated, AnimatedComponent, AnimatedProps } from '@react-spring/web'
import { useScrollState } from './ScrollContainer';

export function ScrollComponent({speed=0.1, ...props}) {
    const ref = useRef<HTMLDivElement>()
    const { windowScrollY } = useScrollState()
    const [{ y }, set] = useSpring(() => ({
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

    useEffect(() => {
        set({y: [-windowScrollY*speed]})
        console.log(ref.current.getBoundingClientRect().y)
    }, [windowScrollY])

    return (
        <animated.div
        ref={ref}
        style={{
            transform: y.to(y => `translateY(${y}px)`)
        }}
        {...props}
        >
        </animated.div>
    )
}