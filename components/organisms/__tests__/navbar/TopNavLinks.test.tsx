import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import TopNavLinks from '../../navbar/TopNavLinks'

describe('<TopNavLinks />', () => {
  it('renders email text', () => {
    renderWithTheme(<TopNavLinks />)

    expect(screen.getByText('info@sh-law.com')).toBeInTheDocument()
  })

  it('renders Join our mailing list text', () => {
    renderWithTheme(<TopNavLinks />)

    expect(screen.getByText('Join our mailing list')).toBeInTheDocument()
  })
})
