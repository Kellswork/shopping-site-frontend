import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { headerFont, errorCol, typeScale, success } from '../../utils'

const ALERT_MODIFIERS = {
  error: () => `
    background: ${errorCol.error100};
    border: 1px solid ${errorCol.error400};
    color: ${errorCol.error700};
      `,
  success: () => `
    background: ${success[100]};
    border: 1px solid ${success[400]};
    color: ${success[700]};
      `,
}

export const Alert = styled.div`
  width: 70%;
  padding: 1rem 0.75rem;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 4px;
  position: relative;
  font-family: ${headerFont};
  .closeIconWrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0.75rem 1rem;
    color: red;
  }

  p {
    font-size: ${typeScale.para};
  }
  ${applyStyleModifiers(ALERT_MODIFIERS)};
`
