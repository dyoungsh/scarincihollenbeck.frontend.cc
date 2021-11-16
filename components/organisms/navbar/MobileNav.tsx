import React, { useState, useRef } from 'react'
import Burger from 'components/molecules/mobile-menu/Burger'
import Menu from 'components/molecules/mobile-menu/Menu'

export default function HamburgerMobileMenu() {
  const [open, setOpen] = useState(false)
  const node = useRef()

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </div>
  )
}
