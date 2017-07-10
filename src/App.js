import React from 'react'
import styled from 'styled-components'

import { default as Compass } from './components/Compass'
import { default as NorthStar } from './components/NorthStar'
import { Grid, Col, Row } from 'react-flexbox-grid'

const MyImage = styled.img`
  width: 500px;
`

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 66px;
  display: flex;

  .full {
    top: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}



export default App
