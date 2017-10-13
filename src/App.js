import * as React from 'react'
import { Display, Body } from './components/style/typography'

class App extends React.Component {
  render() {
    return (
      <div>
        <Display>Hey I'm Morgan</Display>
        <Body>Welcome to my not-so-complete site</Body>
      </div>
    );
  }
}

export default App;
