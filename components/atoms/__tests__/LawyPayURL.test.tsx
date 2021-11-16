import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import LawPayURL from '../LawPayURL'

describe('<LawPayURL />', () => {
  it('renders proper link', () => {
    renderWithTheme(<LawPayURL />)
    expect(screen.getByText('Make payment').closest('a')).toHaveAttribute(
      'href',
      'https://secure.lawpay.com/pages/scarincihollenbeck/operating'
    )
  })
})
