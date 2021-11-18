import Burger from 'components/molecules/mobile-menu/Burger'
import Menu from 'components/molecules/mobile-menu/Menu'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()

  return (
    <NavContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </NavContainer>
  )
}

const NavContainer = styled.div``

export default MobileNav
