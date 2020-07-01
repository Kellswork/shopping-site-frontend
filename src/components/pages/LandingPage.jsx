import React from 'react'
import styled from 'styled-components'
import { Nav, Footer } from '../organisms'
import { Container } from './~styledPages'
import headerImage from '../../asset/header-card.png'

const Div = styled.div`
  width: 100%;
  max-width: 110px;
`
export const LandingPage = () => (
  <Container>
    <Nav />
    <Div>
      <header>
        <div className="carousel">
          <img src={headerImage} alt="header-necklace card" />
        </div>
      </header>
      <div className="categories"></div>
    </Div>
    <Footer />
  </Container>
)
