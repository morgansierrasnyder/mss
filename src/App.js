import React from 'react'
import styled from 'styled-components'

import { default as Compass } from './components/Compass'
import { default as NorthStar } from './components/NorthStar'
import Collage from '../assets/collage.jpg'

const MyImage = styled.img`
  width: 500px;
`
const Blanket = styled.div`
  background-image: url(${Collage});
  background-size: 100%;
  background-attachment: fixed;
`
const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 121px;
  background-color: rgba(255, 255, 255, 0.66);
`

const Content = styled.div`
  width: 100%;
  margin: 12px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
    margin: 12px 0px;
  }
`

class App extends React.Component {
  render() {
    return (
      <Blanket>
        <NorthStar />
        <Body>
          <Compass />
          <Content>
            <MyImage src="http://gdurl.com/JqLZ" alt="background"/>
            <MyImage src="http://gdurl.com/JqLZ" alt="background"/>
            <MyImage src="http://gdurl.com/JqLZ" alt="background"/>
            <MyImage src="http://gdurl.com/JqLZ" alt="background"/>
          </Content>
        </Body>
      </Blanket>
    )
  }
}



export default App
