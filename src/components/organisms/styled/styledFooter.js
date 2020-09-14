import styled from 'styled-components'
import {
  typeScale,
  headerFont,
  neutrals,
  spacingUnit,
  primaryBlue,
} from '../../../utils'

export const MainContainer = styled.div`
  margin-top: ${spacingUnit[5]};
  width: 100%;
  max-width: 1300px;
  position: relative;
  margin: 0 auto;
  font-family: ${headerFont};
`

export const Container = styled.div`
  background: ${primaryBlue[8]};
  font-family: ${headerFont};
  width: 100%;
  margin: 0 auto;
  max-width: 1100px;
  height: 250px;
  padding-bottom: ${spacingUnit[2]};
  position: relative;
  z-index: 10;

  .cards {
    width: 100px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${neutrals.lightgrey100};
    margin-top: 30px;
  }
  p,
  li {
    font-size: 12px;
    color: ${neutrals.darkgrey200};
    color: ${neutrals.white};
  }
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: ${spacingUnit[6]} ${spacingUnit[5]} ${spacingUnit[3]};
  box-sizing: border-box;
  .one {
    line-height: 1.3;
    width: 28%;
    .logo {
      padding-bottom: ${spacingUnit[1]};
      padding-top: ${spacingUnit[0]};
    }
    p {
      line-height: 1.4;
    }
  }
  .two,
  .three {
    width: 15%;
    padding-top: ${spacingUnit[1]};
  }
  .four {
    width: 30%;
    padding-top: ${spacingUnit[1]};

    p {
      padding-top: ${spacingUnit[1]};
      padding-bottom: ${spacingUnit[3]};
    }
    .searchbtn {
      padding: 1px 6px;
    }
  }
  .socialMedia {
    margin-top: 30px;
    width: 30%;

    .socialIcons {
      justify-content: space-around;
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
    }
  }
  h6 {
    font-size: ${typeScale.helperText};
    padding-bottom: ${spacingUnit[2]};
    color: ${neutrals.lightgrey100};
    font-weight: 700;
  }
  li {
    padding: ${spacingUnit[1]} 0px;
    cursor: pointer;
  }
`
export const RectBox = styled.div`
  width: 100%;
  height: 140px;
  background: red;
  position: absolute;
  background-color: ${neutrals.lightgrey100};
  top: 220px;
  bottom: 0;

  .copyright {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${typeScale.copyRightText};
  }
`
