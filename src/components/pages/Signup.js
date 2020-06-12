import React from 'react'
import styled from 'styled-components'
import { SignupForm, Nav } from '../organisms'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SignupPage = () => (
  <Div>
    <Nav />
    <SignupForm />
  </Div>
)
