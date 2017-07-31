import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

import { default as Compass } from './components/Compass'
import Collage from '../assets/collage.jpg'

const Content = styled.div`
  padding: 30px 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Compass />
          <Switch>
            <Route path="/bio" render={() => <Content>bio</Content>} />
            <Route path="/art" render={() => <Content>art</Content>} />
            <Route path="/craft" render={() => <Content>craft</Content>} />
            <Route path="/code" render={() => <Content>code</Content>} />
            <Route path="/startup" render={() => <Content>startup</Content>} />
            <Route path="/cg" render={() => <Content>cg</Content>} />
            <Route path="/blog" render={() => <Content>blog</Content>} />
            <Route path="/contact" render={() => <Content>contact</Content>} />
            <Route path="/" render={() => <Content>hello</Content>} />
          </Switch>
        </div>
      </Router>
    )
  }
}



export default App
