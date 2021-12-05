import React, { useLayoutEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'


const useResizeObserver = (ref:React.RefObject<HTMLElement>) => {
    const [size, setSize] = useState({
        height: 0,
        width: 0
    })
    const resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            setSize({
                height: entry.contentRect.height,
                width: entry.contentRect.width
            })
        })
    })

    useLayoutEffect(() => {
        ref.current && resizeObserver.observe(ref.current)
        
        return () => ref.current && resizeObserver.unobserve(ref.current)
    }, [ref])

    return size
}


export {useResizeObserver}