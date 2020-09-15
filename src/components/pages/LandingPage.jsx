import React from 'react'
import styled from 'styled-components'

import { Footer } from '../organisms'
import { Container } from './~styledPages'
import { LinksDiv } from '../organisms/styled'
import { LogoDiv } from '../molecules'
import { SearchIcon } from '../atoms'
import {
  neutrals,
  spacingUnit,
  typeScale,
  textFont,
  radius,
  headerFont,
} from '../../utils'

import diamondRing2 from '../../asset/headerImages/daimond-ring.png'
import engageGoldRing from '../../asset/headerImages/engage-gold-ring.png'
import goldRing from '../../asset/headerImages/gold-ring.png'
import loversRing from '../../asset/headerImages/lovehead-gold-ring.png'
import silverRing from '../../asset/headerImages/silver-ring.png'
import snakeRing from '../../asset/headerImages/snake-ring.png'

import weddingRings from '../../asset/card-images/weddingRings.png'
import necklace from '../../asset/card-images/necklace-card.png'
import glasses from '../../asset/card-images/cateye-glasses.png'
import knuckleRings from '../../asset/card-images/knuckle-rings.png'

export const BottomNav = styled.div`
  width: 100%;
  /* max-width: 1300px; */
  height: 140px;
  position: relative;
  box-sizing: border-box;
  background: ${neutrals.lightgrey100};
  border-radius: ${radius.xs};
  .bottom-nav-content {
    display: flex;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 25px;
    .logo {
      margin-left: ${spacingUnit[1]};
    }
    li {
      padding: 10px;
    }
  }
`

export const TopNav = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  align-items: center;
  font-size: ${typeScale.copyRightText};
  font-family: ${textFont};
  margin-top: 20px;
  padding: 20px;
  color: #373737b0;
  .left-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 27%;
  }
  .right-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 27%;
  }
`

const HeaderCard = styled.div`
  max-width: 1100px;
  border-radius: 2px;
  position: relative;
  margin: 0 auto;
  margin-top: -40px;
  width: 100%;
  height: 400px;
  background-color: #ffddef;
  margin-bottom: ${spacingUnit[5]};
  font-family: 'Emilys Candy', cursive;
  display: flex;
  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    h1 {
      font-size: ${typeScale.H1};
      margin-bottom: ${spacingUnit[3]};
    }
    h5 {
      font-size: ${typeScale.H5};
      margin-bottom: ${spacingUnit[3]};
    }
  }
  .header-images {
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    img {
      width: 184px;
    }
  }
`
const TinyCircle = () => (
  <div
    style={{
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      backgroundColor: '#2d2b2b82',
    }}
  ></div>
)

export const ViewMoreButton = styled.button`
  padding: 12px 18px;
  background: transparent;
  border: 2px solid #f585bf;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${neutrals.darkgrey300};
  font-family: 'Emilys Candy', cursive;
`
const CategoriesSection = styled.div`
  margin-bottom: ${spacingUnit[8]};
  margin-top: ${spacingUnit[8]};
  display: flex;
  max-width: 1100px;
  width: 100%;
  font-family: ${textFont};
  .category-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .line {
      height: 1px;
      width: 100%;
      background-color: ${neutrals.lightgrey200};
      margin-bottom: 10px;
      margin-top: 10px;
    }
    p {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .category-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cat-card {
    width: 260px;
    height: 120px;
    background-color: grey;
    margin-bottom: ${spacingUnit[5]};
    background-color: grey;
    margin-left: ${spacingUnit[5]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    img {
      width: 120px;
    }
    p {
      font-size: ${typeScale.helperText};
      padding: 5px;
    }
  }
`
const NewArrivals = styled.div`
  margin-bottom: ${spacingUnit[8]};
  margin-top: ${spacingUnit[8]};
  max-width: 1100px;
  width: 100%;
  h4 {
    font-size: ${typeScale.H4};
    text-transform: capitalize;
    font-family: ${headerFont};
    text-align: center;
    margin-bottom: ${spacingUnit[1]};
  }
  h6 {
    font-size: ${typeScale.text};
    font-family: ${headerFont};
    text-align: center;
  }
  .prod-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .prod-image {
    width: 220px;
    height: 280px;
    padding: 4px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    img {
      width: 180px;
    }
  }
`

export const LandingPage = () => (
  <Container>
    <TopNav>
      <div className="left-content">
        <p>+2348090103333</p>
        <TinyCircle />
        <p>lystergems@gmail.com</p>
      </div>
      <div className="right-content">
        <p>ACCOUNT</p>
        <TinyCircle />
        <p>WISHLIST</p>
        <TinyCircle />
        <p>LOGIN</p>
        <TinyCircle />
        <p>SIGNUP</p>
      </div>
    </TopNav>
    <BottomNav>
      <div className="bottom-nav-content">
        <LogoDiv />
        <LinksDiv>
          <ul>
            <li>WEDDING RINGS</li>
            <li>NECKLACES</li>
            <li>KNUCKLE RINGS</li>
            <li>GLASSES</li>
          </ul>
        </LinksDiv>
        <div>
          <SearchIcon />
        </div>
      </div>
    </BottomNav>

    <HeaderCard>
      <div className="header-content">
        <h1>Ring Lover ?</h1>
        <h5>we’ve got a collection to die for</h5>
        <ViewMoreButton>View More</ViewMoreButton>
      </div>
      <div className="header-images">
        <img src={diamondRing2} alt="diamond engagment ring" />
        <img src={engageGoldRing} alt="Engagment ring gold" />
        <img src={goldRing} alt="diamond engagment ring" />
        <img src={loversRing} alt="diamond engagment ring" />
        <img src={snakeRing} alt="diamond engagment ring" />
        <img src={silverRing} alt="diamond engagment ring" />
      </div>
    </HeaderCard>
    <CategoriesSection className="categories">
      <div className="category-content">
        <div className="line"></div>
        <p>From our collection of engagement rings to Retro style glasses</p>
        <p>let your style come Alive!</p>
        <div className="line"></div>
      </div>
      <div className="category-card">
        <div style={{ backgroundColor: '#D9E8FF' }} className="cat-card">
          <img src={necklace} alt="necklace" />
          <p style={{ color: '#2251CC' }}>NECKLACES</p>
        </div>
        <div style={{ backgroundColor: '#F7E4FA' }} className="cat-card">
          <p style={{ color: '#B016C9' }}>ALTE GLASSES</p>
          <img src={glasses} alt="alte glasses" />
        </div>
        <div style={{ backgroundColor: '#EFFCF6' }} className="cat-card">
          <p style={{ color: '#199473' }}>KNUCKLE RINGS</p>
          <img src={knuckleRings} alt="" />
        </div>
        <div style={{ backgroundColor: '#FFF3C4' }} className="cat-card">
          <img src={weddingRings} alt="" />
          <p style={{ color: '#82712E' }}>WEDDING RINGS</p>
        </div>
      </div>
    </CategoriesSection>
    <NewArrivals className="new-arrivals">
      <h4>NEW ARRIVALS</h4>
      <h6>Just for your shopping pleasure</h6>
      <div className="prod-section">
        <div className="prod-card">
          <div className="prod-image">
            <img src={diamondRing2} alt="diamond engagment ring" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={engageGoldRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={goldRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={loversRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={snakeRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={silverRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={diamondRing2} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
        <div className="prod-card">
          <div className="prod-image">
            <img src={goldRing} alt="Engagment ring gold" />
          </div>
          <div className="prod-details">
            <p>Happy Engagement ring</p>
            <p>4500</p>
          </div>
        </div>
      </div>
    </NewArrivals>
    <Footer />
  </Container>
)
