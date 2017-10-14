import * as React from 'react'
import glamorous from 'glamorous'

import Header from './components/Header'
import { Display, Body } from './components/style/typography'

const Content = glamorous.div({
  position: 'absolute',
  top: 100,
  bottom: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  backgroundColor: '#F5F5F5',
})

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
