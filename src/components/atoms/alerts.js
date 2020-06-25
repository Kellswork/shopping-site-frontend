import styled, { css } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { headerFont, errorCol, typeScale, success } from '../../utils'

const ALERT_MODIFIERS = {
  error: () => `
    background: ${errorCol.error100};
    border: 1px solid ${errorCol.error400};
    color: ${errorCol.error700};
    margin-left: 20px;
      `,
  success: () => `
    background: ${success[100]};
    border: 1px solid ${success[400]};
    color: ${success[700]};
      `,
}

export const Alert = styled.div`
  width: 70%;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  font-family: ${headerFont};

  p{ 
      font-size: ${typeScale.para};
  }
  ${applyStyleModifiers(ALERT_MODIFIERS)};

  /* ${({ error }) =>
    error &&
    css`
      background: ${errorCol.error100};
      border: 1px solid ${errorCol.error400};
      color: ${errorCol.error400};
    `};
  ${({ success }) =>
    error &&
    css`
      background: ${errorCol.error100};
      border: 1px solid ${errorCol.error400};
      color: ${errorCol.error400};
    `} */
}
`
