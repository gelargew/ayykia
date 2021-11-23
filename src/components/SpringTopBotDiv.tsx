import { animated, useSpring, config } from '@react-spring/web'
import React, { useEffect, useRef } from 'react'

interface animateProps {
    isShowing: boolean
}

export default function SpringTopBotDiv({isShowing=true, color='none', ...props}: animateProps & any) {
    const [{y}, set] = useSpring(() => ({
        y: [0],
        config: config.molasses
    }))
    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
        ref.current.style.bottom = isShowing ? 'auto' : '0'
        ref.current.style.top = isShowing ? '0'  : 'auto'
        set({y: [isShowing ? 100 : 0]})
    }, [isShowing])

    return (
        <animated.div
        ref={ref}
        style={{
            overflow: 'hidden',
            height: y.to(y => `${y}%`),
            width: '100%',
            backgroundColor: color
        }}
        {...props}
        >

        </animated.div>
    )
}