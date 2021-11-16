import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Burger from '../../mobile-menu/Burger'

const mockProps = {
  open: true,
  setOpen: () => {},
}

describe('<Burger />', () => {
  it('renders screen reader label', () => {
    renderWithTheme(<Burger {...mockProps} />)

    expect(screen.getByText('Mobile Menu')).toBeInTheDocument()
  })
})
