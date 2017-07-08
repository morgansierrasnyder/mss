import React from 'react';
import styled from 'styled-components'

import { default as Nav } from './components/Nav'
import { Col, Row, Grid } from 'react-bootstrap/lib';

const Mss = styled.div`
  display: flex;
`
const MyName = styled.div`
  height: 115px;
  padding: 12px;
  text-align: right;
  color: #222;
`
const MyImage = styled.img`
  width: 500px;
`

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>

          <Col>
            <MyName>
              <h2>
                Morgan<br></br>
                Sierra<br></br>
                Snyder
              </h2>
            </MyName>

            <Nav/>
          </Col>

          <Col>
            <Row />
            <MyImage src="http://gdurl.com/JqLZ" alt="background"/>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default App
