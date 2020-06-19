import React from 'react'
import { LogoDiv, InputButton } from '../molecules'
import { Twitter, Facebook, CopyrightLogo, Instagram } from '../atoms'
import verve from '../../asset/verve.png'
import visa from '../../asset/visa.png'
import mastercard from '../../asset/mastercard.png'
import { Container, Content, RectBox, MainContainer } from './styled'

export const Footer = () => (
  <MainContainer>
    <Container>
      <Content>
        <section className="one">
          <LogoDiv />
          <div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
          </div>
        </section>
        <section className="two">
          <h6>INFORMATION</h6>
          <ul>
            <li>Shipping</li>
            <li>How to Place Order</li>
            <li>Return and Exchange</li>
          </ul>
          <div className="cards">
            <img width="32px" height="12px" src={verve} alt="verve card logo" />
            <img width="26px" height="18px" src={visa} alt="visa card logo" />
            <img
              width="29px"
              height="19px"
              src={mastercard}
              alt="mastercard logo"
            />
          </div>
        </section>
        <section className="three">
          <h6>SUPPORT</h6>
          <ul>
            <li>Wishlist</li>
            <li>Contact Us</li>
            <li>Order History</li>
          </ul>
        </section>
        <section className="four">
          <h6>SUBSCRIBE</h6>
          <p>Be the first to know about new arrivals and promotions!</p>
          <InputButton placeholder="enter email address" text="Subscribe" />
          <div className="socialMedia">
            <div className="socialIcons">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>
        </section>
      </Content>
    </Container>
    <RectBox>
      <section className="copyright">
        <div className="copyright">
          <CopyrightLogo />
          <span>2020 LysterGems by kellswork. All rights reserved</span>
        </div>
      </section>
    </RectBox>
  </MainContainer>
)
