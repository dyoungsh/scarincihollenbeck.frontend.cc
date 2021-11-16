import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { SITE_NAVIGATION } from 'utils/constants'

interface Props {
  open: boolean
}

const Menu: React.FC<Props> = ({ open }: Props) => (
  <StyledMenu open={open}>
    <ul>
      {SITE_NAVIGATION.map((nav) => (
        <li key={nav.label}>
          {nav.slug ? (
            <Link href={nav.slug}>
              <a>{nav.label}</a>
            </Link>
          ) : nav.children ? (
            <>
              {nav.label}
              <ul>
                {nav.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.slug}>
                      <a>{child.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </StyledMenu>
)

const StyledMenu = styled.nav<Pick<Props, 'open'>>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.secondaryGray};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 70vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  width: 75%;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgb(138 155 165 / 15%);
  margin-top: 1em;
  @media (min-width: 0px) and (max-width: 449px) {
    height: 84vh;
  }
  li {
    font-size: 1.2rem;
    list-style-type: none;

    ul {
      margin-left: 1em;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #db2220;
    }
  }
`

export default Menu
