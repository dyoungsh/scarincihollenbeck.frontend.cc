import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Menu from '../../mobile-menu/Menu'

const mockProps = {
  open: true,
}

describe('<Menu />', () => {
  it('renders top level link', () => {
    renderWithTheme(<Menu {...mockProps} />)

    expect(screen.getByText('Library')).toBeInTheDocument()
  })
  it('renders child link', () => {
    renderWithTheme(<Menu {...mockProps} />)

    expect(screen.getByText('Firm News')).toBeInTheDocument()
  })
})
