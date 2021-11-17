import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import HomeBanner from '../../home/HomeBanner'

describe('<HomeBanner />', () => {
  it('renders We are here to help', () => {
    renderWithTheme(<HomeBanner />)

    expect(screen.getByText('We are here to help')).toBeInTheDocument()
  })

  it('renders Ready to rebuild text', () => {
    renderWithTheme(<HomeBanner />)

    expect(screen.getByText('Ready to rebuild?')).toBeInTheDocument()
  })
})
