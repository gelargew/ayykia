import React, {useEffect, useState, useContext, useLayoutEffect} from 'react'
import {Helmet} from 'react-helmet'
import IndexPage1 from '../sections/IndexPage1'
import '../styles/index.css'
import ScrollContainer from '../components/ScrollContainer'
import IndexPage2 from '../sections/IndexPage2'
import MainBg from '../components/MainBg'
import IndexPage3 from '../sections/IndexPage3'
import Layout from '../components/Layout'
import IndexPage4 from '../sections/IndexPage4'
import IndexPage5 from '../sections/IndexPage5'
import IndexPage6 from '../sections/IndexPage6'
import IndexPage7 from '../sections/IndexPage7'
import LoadingPage from '../components/LoadingPage'
import ScrollWrapper from '../components/ScrollWrapper'


interface ScrollStateProps {
  windowScrollY: number
}

export const ScrollState = React.createContext<ScrollStateProps>(null)

export default function Index() {
  const [windowScrollY, setWindowScrollY] = useState(0)

  const setScrollY = () => setWindowScrollY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', setScrollY)
    return () => window.removeEventListener('scroll', setScrollY)
  }, [])


  return (
    <>
      <Helmet>
        <title>AYYKIA | furniture</title>
        <link rel="icon" type="svg" href="/logo.svg" sizes="16x16" />
        <meta name="image" property="og:image" content="/logo.png"></meta>
        <meta name='description' content='Ayykia, Home furnishings. Selling cheap and high quality furniture' />
        <html lang='en' />
        
      </Helmet>
      <ScrollState.Provider value={{windowScrollY}}>
        <Layout>
          <ScrollWrapper>
            
            <IndexPage1 />
            <IndexPage2 />
            <IndexPage3 />
            <IndexPage4 />
            <IndexPage5 />
            <IndexPage6 />
            <IndexPage7 />
          </ScrollWrapper>
        </Layout>
      </ScrollState.Provider>
    </>
  )
}

export const useScrollState = () => useContext(ScrollState)