import React from 'react'
import IndexPage1 from '../sections/IndexPage1'
import '../styles/index.css'
import ScrollContainer from '../components/ScrollContainer'
import IndexPage2 from '../sections/IndexPage2'
import MainBg from '../components/MainBg'


export default function Index() {

  return (
    <>
      <MainBg />
      <ScrollContainer>

        <IndexPage1 />
        <IndexPage2 />
        <IndexPage1 />
        <IndexPage1 />
      </ScrollContainer>
    </>
  )
}