import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { neutrals } from './utils'
import { SignupPage, EmailVerification } from './components/pages'
const Div = styled.div`
  background-color: ${neutrals.white};
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Switch>
      <Div>
        <Route exact path="/" component={SignupPage} />
        <Route path="/verify" component={EmailVerification} />
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/emailverification">
          <EmailVerification />
        </Route>
      </Div>
    </Switch>
  )
}

export default App
