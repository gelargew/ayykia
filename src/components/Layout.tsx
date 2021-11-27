import React, { useContext, useState } from 'react'
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
                <DropDown isShowing={showDropdown} />
            </div>
            {children}
        </LayoutContext.Provider>
    )
}

const DropDown = ({isShowing=false, ...props}) => {
    const {navigateHome} = useLayoutContext()

    return (
        <SpringTopBotDiv isShowing={isShowing} isCarousel={false} height={80} className='layout-dropdown' {...props}>
            <nav>
                <section>
                    <h3>AYYKIA</h3>
                    <a onClick={navigateHome}>HOME</a>
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