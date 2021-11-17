import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import BlockContent from '../../home/honey-comb/BlockContent'

const mockProps = {
  title: 'Our Attorneys',
  description: '....',
  url: {
    label: 'Meet our attorneys',
    slug: '/attorneys',
  },
}
describe('<BlockContent />', () => {
  it('renders block title', () => {
    renderWithTheme(<BlockContent {...mockProps} />)

    expect(screen.getByText('Our Attorneys')).toBeInTheDocument()
  })

  it('renders block url', () => {
    renderWithTheme(<BlockContent {...mockProps} />)

    expect(screen.getByText('Meet our attorneys').closest('a')).toHaveAttribute(
      'href',
      '/attorneys'
    )
  })
  it('it does render block url', () => {
    mockProps.url = {
      label: '',
      slug: '',
    }
    renderWithTheme(<BlockContent {...mockProps} />)

    expect(screen.queryByText('Meet our attorneys')).toBeNull()
  })
})
