import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { SITE_FOOTER_NAVIGATION } from 'utils/constants'

const TopMenu = () => {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  &:not(:last-child) {
    padding-right: 8px;
    border-right: 4px solid ${(props) => props.theme.colors.white};
  }

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

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`
export default TopMenu
