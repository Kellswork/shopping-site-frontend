import React from 'react'
import styled from 'styled-components'
import { LogoDiv, InputButton } from '../molecules'
import { neutrals, headerFont, typeScale, spacingUnit } from '../../utils'
import { Twitter, Facebook, Email, CopyrightLogo } from '../atoms'
import verve from '../../asset/verve.png'
import visa from '../../asset/visa.png'
import mastercard from '../../asset/mastercard.png'

const Container = styled.div`
  background: ${neutrals.white};
  font-family: ${headerFont};
  max-width: 1200px;
  height: 250px;
  

  .cards {
    width: 100px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  p,
  li {
    font-size: 14px;
    color: ${neutrals.darkgrey200};
  }
  .copyright {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: ${typeScale.copyRightText};
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: ${spacingUnit[5]} ${spacingUnit[3]};
  box-sizing: border-box;

  .one {
    line-height: 1.3;
    width: 30%;
  }
  .two,
  .three {
    width: 15%;
    text-align: center;
  }
  .four {
    text-align: center;
    p {
      padding-top: ${spacingUnit[1]};
      padding-bottom: ${spacingUnit[3]}
    }
    .searchbtn {
      padding: 1px 6px;
    }
  }
  .socialMedia {
    padding-top: ${spacingUnit[2]};

    p {
      padding-bottom: ${spacingUnit[2]};
    }
    .socialIcons {
      width: 20%;
      margin: 0 auto;
      justify-content: space-around;
      display: flex;
    }
  }
  h6 {
    font-size: ${typeScale.h6};
    padding-bottom: ${spacingUnit[2]};
    color: ${neutrals.darkgrey200};
    font-weight: 700;
  }
  /* ul {
    padding-top: ${spacingUnit[2]};
  } */
  li {
    padding: ${spacingUnit[1]} 0px;
  }
`
const LineDiv = styled.div`
  width: 100%;
  background: #e4e7eb;
  max-width: 820px;
  margin: 0 auto;
  height: 2px;
`
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
