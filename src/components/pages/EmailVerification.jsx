import React from 'react'

import { Nav, Footer } from '../organisms'
import { CardContainer } from '../organisms/styled'
import { CheckMark, SecondaryButton } from '../atoms'
import { EmailVerificationCard, Container } from './~styledPages'

export const EmailVerification = () => (
  <Container>
    <Nav />
    <CardContainer>
      <EmailVerificationCard>
        <CheckMark />
        <h6>Registration Succesful!</h6>
        <p>
          A verification link has been sent to your email address, please click
          on the link to verify your email address
        </p>
        <SecondaryButton>Resend Link</SecondaryButton>
      </EmailVerificationCard>
    </CardContainer>
    <Footer />
  </Container>
)
