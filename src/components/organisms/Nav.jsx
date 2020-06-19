import React from 'react'
import { LogoDiv, SearchInput } from '../molecules'
import {
  LabeledCartIcon,
  LabeledHeartIcon,
  LabeledUserIcon,
} from '../molecules/LabeledIcons'
import { Div, TopSection, IconDiv, LinksDiv, LineDiv } from './styled'

export const Nav = () => (
  <Div>
    <TopSection>
      <LogoDiv />
      <div className="search">
        <SearchInput placeholder="What are you looking for..." />
      </div>
      <IconDiv>
        <LabeledHeartIcon />
        <LabeledCartIcon />
        <LabeledUserIcon />
      </IconDiv>
    </TopSection>
    <LineDiv />
    <LinksDiv>
      <ul>
        <li>Wedding Rings</li>
        <li>Necklaces</li>
        <li>Knuckle Rings</li>
        <li>Glasses</li>
      </ul>
    </LinksDiv>
  </Div>
)
