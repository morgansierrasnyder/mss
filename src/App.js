import React from 'react'
import { Div, ThemeProvider } from 'glamorous'
import { Row, Col } from 'glamorous-grid'

import Gallery from './components/Gallery'
import Card from './components/Card'
import theme from './theme'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Row>
          <Col span={1/3}>
            <Card />
          </Col>
          <Col span={3/6}>
            <Gallery />
          </Col>
        </Row>
      </ThemeProvider>
    )
  }
}

export default App
