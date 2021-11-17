import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import FeaturedPost from '../../article-hero/FeaturedPost'

const mockProps = {
  id: 1,
  slug: '/business-law-post',
  image:
    'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',
  title: 'Business Law Post',
  date: 'January 1, 2022',
  authors: [
    {
      name: 'Dan Brecher',
      link: '/attorney/dan-brecher',
    },
  ],
  excerpt: '...',
}

describe('<FeaturedPost />', () => {
  it('renders post title', () => {
    renderWithTheme(<FeaturedPost {...mockProps} />)

    expect(screen.getByText('Business Law Post')).toBeInTheDocument()
  })

  it('renders author name', () => {
    renderWithTheme(<FeaturedPost {...mockProps} />)

    expect(screen.getByText('Dan Brecher')).toBeInTheDocument()
  })
})
