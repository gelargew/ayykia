import React, { useContext, useEffect, useMemo, useRef } from 'react'
import { useSpring, config, animated, SpringValue } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { useResizeObserver } from '../utils/observerHooks'
import useMatchMedia from '../utils/useMatchMedia'

interface contextProps {
    y: SpringValue<number>
}
const ScrollContext = React.createContext<contextProps>(null)

export default function ScrollWrapper({children, style, ...props}: React.HTMLProps<HTMLDivElement>) {
    const ref = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)
    const wrapperSize = useResizeObserver(wrapper)
    const contentSize = useResizeObserver(ref)
    const height = useMemo(() => {
        return contentSize.height - wrapperSize.height
    }, [wrapperSize, contentSize])

    const [{y}, spring] = useSpring(() => ({
        y: 0,
        config: config.molasses
    }))

    const updateY = (deltaY:number, isDrag=false) => {

        let target = y.animation.to as number + deltaY
        if (isDrag) target = 1
        if (target > 1) target = 0
        else if (target < -height) target = -height
        spring.start({y : target})
    }

    const bind = useGesture({
        onWheel: state => state.active && updateY(-state.movement[1]/2),
        onDrag: state => {
            updateY(state.delta[1]*state.velocity[1])
        }
    })

    useEffect(() => {
        updateY(0)
    }, [height])

    return (
        <div 
        ref={wrapper}  
        style={{touchAction: 'none', overflow: 'hidden', height:'100vh', ...style}} 
        {...bind()} 
        {...props}
        >

            <animated.div ref={ref} style={{transform: y.to(y => `translateY(${y}px)`), overflow: 'hidden'}}>
                <ScrollContext.Provider value={{y}}>
                {children}
                </ScrollContext.Provider>
            </animated.div>
        </div>
    )
}

export const useScrollContext = () => useContext(ScrollContext)