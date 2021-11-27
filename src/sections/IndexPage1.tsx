import React, { useEffect, useRef } from 'react'
import { useLayoutContext } from '../components/Layout'
import useOnScreen from '../utils/useOnscreen'


export default function IndexPage1() {
    const ref = useRef<HTMLDivElement>()
    const onScreen = useOnScreen(ref, '-10%')
    const {setIsOpaque} = useLayoutContext()

    useEffect(() => {
        setIsOpaque(!onScreen)
    }, [onScreen])
    

    return (
        <section id='index-page-1' ref={ref}>

            <h1 id='hero-text'>AYYKIA</h1>

        </section>
    )
}