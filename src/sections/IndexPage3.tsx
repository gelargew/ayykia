import React, { useState, useEffect, useReducer } from 'react'
import SpringTopBotDiv from '../components/SpringTopBotDiv'
import LAMP1 from '../images/lamp1.jpg'
import CHAIR1 from '../images/chair1.jpg'
import DESK1 from '../images/desk1.jpg'

type objNames = 'lamp1' | 'chair1' | 'desk1'
type obj2 = 'a'|'b'|'c'
type state2 = Record<obj2, boolean>
type showProps = Record<objNames, boolean>

const showReducer = (state: showProps, action: objNames) => {
    const keys = Object.keys(state)
    const newState = keys.reduce((prev, key) => {
        prev[key] = key === action
        return prev
    }, {} as showProps)

    return newState
}

export default function IndexPage3() {
    const [show, setShow] = useReducer(showReducer, {
        lamp1: true,
        chair1: false,
        desk1: false
    })

    


    return (
        <section id='index-page-3'>
            <div id='id3-left'>
                <SpringTopBotDiv className='id3-carousel' color='#82796C' isShowing={show.lamp1}>
                    <img alt='lamp' src={LAMP1} />
                </SpringTopBotDiv>
                <SpringTopBotDiv className='id3-carousel' color='#dbd6bf' isShowing={show.chair1}>
                    <img alt='chair' src={CHAIR1} />
                </SpringTopBotDiv>
                <SpringTopBotDiv className='id3-carousel' isShowing={show.desk1}>
                    <img alt='desk' src={DESK1} />
                </SpringTopBotDiv>
            </div>

            <div id='id3-right'>
                <h2>featured</h2>
                <button 
                style={{ 
                    color: show.lamp1 ? 'white' : 'transparent'
                }} 
                onClick={() => setShow('lamp1')}>
                    LAMP
                </button>
                <button 
                style={{
                    color: show.chair1 ? 'white' : 'transparent'
                }} 
                onClick={() => setShow('chair1')}>
                    CHAIR
                </button>
                <button 
                style={{
                    color: show.desk1 ? 'white' : 'transparent'
                }} 
                onClick={() => setShow('desk1')}>
                    DESK
                </button>
            </div>

        </section>
    )
}