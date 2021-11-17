import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import LineTitle from '../LineTitle'

describe('<LineTitle />', () => {
  it('renders line title', () => {
    renderWithTheme(<LineTitle title="Business Law Post" />)

    expect(screen.getByText('Business Law Post')).toBeInTheDocument()
  })
  it('it does renders line title', () => {
    renderWithTheme(<LineTitle title="" />)

    expect(screen.queryByText('Business Law Post')).toBeNull()
  })
})
