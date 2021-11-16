import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import SiteLogo from '../../navbar/SiteLogo'

const mockProps = {
  scrollTop: false,
}

describe('<SiteLogo />', () => {
  it('renders the logo', () => {
    renderWithTheme(<SiteLogo {...mockProps} />)

    expect(screen.getByAltText('Scarinci Hollenbeck, LLC')).toBeInTheDocument()
  })

  it('hides the logo', () => {
    mockProps.scrollTop = true
    renderWithTheme(<SiteLogo {...mockProps} />)

    expect(screen.queryByTestId('logo')).not.toBeInTheDocument()
  })
})
