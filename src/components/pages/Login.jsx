import React from 'react'
import { Nav, Footer, LoginForm } from '../organisms'
import { Container } from './~styledPages'

export const LoginPage = () => (
  <Container>
    <Nav />
    <LoginForm />
    <Footer />
  </Container>
)
