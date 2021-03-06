import React from 'react'
import styled from 'styled-components'
import { SignupForm, Nav, Footer } from '../organisms'
import { neutrals, spacingUnit } from '../../utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid ${neutrals.lightgrey100}; */
  /* background-color: ${neutrals.white}; */
  margin: 0 auto;
  margin-top: ${spacingUnit[1]};
`

export const SignupPage = () => (
  <Container>
    <Nav />
    <SignupForm />
    <Footer />
  </Container>
)
