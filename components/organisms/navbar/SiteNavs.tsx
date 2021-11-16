import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { SITE_NAVIGATION } from 'utils/constants'

const SiteNavs = () => {
  const dropDown = useRef(null)
  const [currentMenu, setCurrentMenu] = useState<string>('')

  useEffect(() => {
    const onClick = (e) => {
      // If the active element exists and is clicked outside of
      if (dropDown.current !== null && !dropDown.current.contains(e.target)) {
        setCurrentMenu('')
      }
    }

    // If the item is active (ie open) then listen for clicks outside
    if (currentMenu) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [currentMenu, dropDown])

  return (
    <Navbar>
      <Nav>
        {SITE_NAVIGATION.map((nav) =>
          nav.children ? (
            <NavDropDown key={nav.label}>
              <DropdDownButton onClick={() => setCurrentMenu(nav.menuId)} id={nav.menuId}>
                {nav.label}
              </DropdDownButton>
              {currentMenu === nav.menuId && (
                <DropDownMenu ref={dropDown}>
                  {nav.children.map((child) => (
                    <DropDownItem key={child.label}>
                      <Link href={child.slug}>
                        <a>{child.label}</a>
                      </Link>
                    </DropDownItem>
                  ))}
                </DropDownMenu>
              )}
            </NavDropDown>
          ) : (
            <NavItem key={nav.label} id={nav.menuId}>
              <Link href={nav.slug}>
                <a>{nav.label}</a>
              </Link>
            </NavItem>
          )
        )}
      </Nav>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 16px;
  list-style: none;
`

const NavItem = styled.div`
  ${(props) => props.theme.fonts.xl};
  height: 35px;
  transition: all 0.1s;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${(props) => props.theme.colors.red};
  }

  &:not(:last-child) {
    margin: 0 24px;
  }

  &:last-child {
    margin-left: 24px;
  }

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }
`

const NavDropDown = styled(NavItem)``
const DropDownMenu = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.offWhite};
  margin: 0;
  padding: 1rem;
  min-width: 200px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.colors.shadowNormal};
`

const DropDownItem = styled(NavItem)`
    margin: 4px !important;  
}
`

const DropdDownButton = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  border: 0;
`

export default SiteNavs
