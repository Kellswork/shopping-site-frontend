import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { neutrals } from './utils'
import { SignupPage, EmailVerification, VerifyEmail } from './components/pages'
const Div = styled.div`
  background-color: ${neutrals.white};
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Router>
      <Div>
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/emailverification">
            <EmailVerification />
          </Route>
          <Route path="/verifyEmail">
            <VerifyEmail />
          </Route>
        </Switch>
      </Div>
    </Router>
  )
}

export default App
