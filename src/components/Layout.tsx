import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/layout.css'
import SpringTopBotDiv from './SpringTopBotDiv'

const LayoutContext = React.createContext(null)

export default function Layout({ children }: { children: any }) {
    const [isOpaque, setIsOpaque] = useState(true)
    const [showDropdown, setShowDropdown] = useState(false)
    const closeDropdown = () => setShowDropdown(false)
    const navigateHome = () => {
        window.scrollTo(0, 0)
        closeDropdown()
    }

    return (
        <LayoutContext.Provider value={{setIsOpaque, navigateHome}}>
            <div id='layout' >
                <header className={(isOpaque || showDropdown) ? 'header-opaque' : ''} >
                    <button onClick={() => setShowDropdown(!showDropdown)} >SHOP</button>
                    {(isOpaque || showDropdown) && <button onClick={navigateHome}><h1>AYYKIA</h1></button>}
                    <button>CONTACT US</button>
                </header>
                <DropDown setShowDropdown={setShowDropdown} isShowing={showDropdown} />
            </div>
            {children}
        </LayoutContext.Provider>
    )
}

const DropDown = ({ setShowDropdown, isShowing=false, ...props}) => {
    const {navigateHome} = useLayoutContext()
    const closeDropdown = (e:React.MouseEvent) => {
        if (e.target.className === 'layout-dropdown') {
            setShowDropdown(false)
        }
    }

    return (
        <SpringTopBotDiv 
        isShowing={isShowing} 
        isCarousel={false} 
        height={100} 
        className='layout-dropdown' 
        onClick={closeDropdown}
        {...props}>
            <nav>
                <section>
                    <h3>AYYKIA</h3>
                    <a onClick={navigateHome} style={{ opacity: 0.8 }}>HOME</a>
                    <a>ABOUT</a>
                    <a>JOURNAL</a>
                    <a>CONTACT</a>
                </section>
                <section>
                    <h3>SHOP</h3>
                    <a>ALL</a>
                    <a>FEATURED</a>
                </section>
                <section>
                    <h3>PRODUCTS</h3>
                    <a>LIVING ROOM</a>
                    <a>OFFICE</a>
                    <a>BEDROOM</a>
                    <a>KITCHEN</a>
                </section>
            </nav>
        </SpringTopBotDiv>
    )
}

export const useLayoutContext = () => useContext(LayoutContext)