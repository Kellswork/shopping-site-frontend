import React from 'react'
import styled from 'styled-components'
import { SignupForm, Nav, Footer } from '../organisms'
import { neutrals, spacingUnit, typeScale, headerFont } from '../../utils'
import { CardContainer } from '../organisms/styled'
import { CheckMark, SecondaryButton } from '../atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid ${neutrals.lightgrey100}; */
  /* background-color: ${neutrals.white}; */
  margin: 0 auto;
  margin-top: ${spacingUnit[1]};
`
const CardContent = styled.div`
  padding-top: 5%;
  height: 55%;
  text-align: center;
  font-family: ${headerFont};
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  h6 {
    font-size: ${typeScale.H6};
    color: ${neutrals.darkgrey400};
    font-weight: bold;
  }
  p {
    font-size: ${typeScale.para};
    color: ${neutrals.darkgrey200};
    line-height: 1.5;
  }
`

export const EmailVerification = () => (
  <Container>
    <Nav />
    <CardContainer>
      <CardContent>
        <CheckMark />
        <h6>Registration Succesful!</h6>
        <p>
          A verification link has been sent to your email address, please click
          on the link to verify your email address
        </p>
        <SecondaryButton>Resend Link</SecondaryButton>
      </CardContent>
    </CardContainer>
    <Footer />
  </Container>
)
