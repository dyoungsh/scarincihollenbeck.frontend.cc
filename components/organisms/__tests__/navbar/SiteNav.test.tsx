import { fireEvent, screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import SiteNavs from '../../navbar/SiteNavs'

describe('<SiteNavs />', () => {
  it('renders top level links', () => {
    renderWithTheme(<SiteNavs />)

    expect(screen.getByText('Attorneys')).toBeInTheDocument()
  })

  it('renders drop down menu item', () => {
    renderWithTheme(<SiteNavs />)
    const btn = screen.getByText('The Firm')
    fireEvent.click(btn)

    expect(screen.getByText('Administration')).toBeInTheDocument()
  })

  it('hides drop down menu it', () => {
    renderWithTheme(<SiteNavs />)

    expect(screen.queryByText('Administration')).toBeNull()
  })
})
