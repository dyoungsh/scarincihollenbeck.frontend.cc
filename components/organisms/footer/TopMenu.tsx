import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { SITE_FOOTER_NAVIGATION } from 'utils/constants'

const TopMenu = () => {
  console.log(SITE_FOOTER_NAVIGATION)
  return (
    <TopMenuContainer>
      {SITE_FOOTER_NAVIGATION.map((nav) => (
        <Link href={nav.slug} key={nav.id}>
          <a>{nav.label}</a>
        </Link>
      ))}
    </TopMenuContainer>
  )
}

const TopMenuContainer = styled.div`
  background-color: ${(props) => props.theme.colors.fifthGray};

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 0;

  a {
    color: ${(props) => props.theme.colors.white};
    ${(props) => props.theme.fonts.xl};
    margin: 0 16px;
    transition: all 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.white};
      text-decoration: underline;
    }
  }
`
export default TopMenu
