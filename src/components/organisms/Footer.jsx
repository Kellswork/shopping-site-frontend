import React from 'react'
import { LogoDiv, InputButton } from '../molecules'
import { Twitter, Facebook, Email, CopyrightLogo } from '../atoms'
import verve from '../../asset/verve.png'
import visa from '../../asset/visa.png'
import mastercard from '../../asset/mastercard.png'
import { Container, Content, LineDiv } from './styled'

export const Footer = () => (
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
        <h6>Information</h6>
        <ul>
          <li>Shipping</li>
          <li>Return and Exchange</li>
          <li>How to Place Order</li>
        </ul>
      </section>
      <section className="three">
        <h6>Support</h6>
        <ul>
          <li>Order History</li>
          <li>Contact Us</li>
          <li>Wishlist</li>
        </ul>
      </section>
      <section className="four">
        <h6>Subscribe</h6>
        <p>Be the first to know about new arrivals and promotions!</p>
        <InputButton placeholder="enter email address" text="Subscribe" />
        <div className="socialMedia">
          <p>Follow us</p>
          <div className="socialIcons">
            <Twitter />
            <Facebook />
            <Email />
          </div>
        </div>
      </section>
    </Content>
    <LineDiv />
    <section className="copyright">
      <div className="copyright">
        <CopyrightLogo />
        <span>2020 LYSTERGEMS. All rights reserved</span>
      </div>
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
  </Container>
)
