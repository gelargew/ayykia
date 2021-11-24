import React, {useEffect, useState, useContext} from 'react'
import IndexPage1 from '../sections/IndexPage1'
import '../styles/index.css'
import ScrollContainer from '../components/ScrollContainer'
import IndexPage2 from '../sections/IndexPage2'
import MainBg from '../components/MainBg'
import IndexPage3 from '../sections/IndexPage3'
import Layout from '../components/Layout'


interface ScrollStateProps {
  windowScrollY: number
}

export const ScrollState = React.createContext<ScrollStateProps>(null)

export default function Index() {
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY)

  const setScrollY = () => setWindowScrollY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', setScrollY)
    return () => window.removeEventListener('scroll', setScrollY)
  }, [])

  return (
    <ScrollState.Provider value={{windowScrollY}}>
      <Layout>
        <MainBg />
        <ScrollContainer>
          
          <IndexPage1 />
          <IndexPage2 />
          <IndexPage3 />
        </ScrollContainer>
      </Layout>
    </ScrollState.Provider>
  )
}

export const useScrollState = () => useContext(ScrollState)