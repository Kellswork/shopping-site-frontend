import styled from 'styled-components'
import { typeScale, headerFont, neutrals, spacingUnit } from '../../../utils'

export const Container = styled.div`
  margin-top: ${spacingUnit[5]};
  background: ${neutrals.lightgrey200};
  font-family: ${headerFont};
  width: 100%;
  max-width: 1200px;
  height: 250px;
  padding-bottom: ${spacingUnit[2]};

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
export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: ${spacingUnit[5]} ${spacingUnit[5]} ${spacingUnit[3]};
  box-sizing: border-box;
  .one {
    line-height: 1.3;
    width: 30%;
    .logo {
      padding-left: ${spacingUnit[2]};
      padding-bottom: ${spacingUnit[1]};
    }
  }
  .two,
  .three {
    width: 15%;
    text-align: center;
    padding-top: ${spacingUnit[1]};
  }
  .four {
    text-align: center;
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
    padding-top: ${spacingUnit[2]};

    p {
      padding-bottom: ${spacingUnit[1]};
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
  li {
    padding: ${spacingUnit[1]} 0px;
  }
`
export const LineDiv = styled.div`
  width: 100%;
  background: #e4e7eb;
  max-width: 820px;
  margin: 0 auto;
  height: 2px;
`
