import React from 'react'
import styled from 'styled-components'
import { neutrals } from './utils'
import { SignupForm } from './components/organisms/Forms'

const Div = styled.div`
  background-color: ${neutrals.lightgrey100};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Div>
      <SignupForm />
    </Div>
  )
}

export default App
