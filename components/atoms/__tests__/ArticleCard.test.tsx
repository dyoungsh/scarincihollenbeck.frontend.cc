import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import ArticleCard from '../ArticleCard'

const mockProps = {
  id: 1,
  slug: '/business-law-post',
  image:
    'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',
  title: 'Business Law Post',
  description: '...',
}

describe('<ArticleCard />', () => {
  it('renders card title', () => {
    renderWithTheme(<ArticleCard {...mockProps} />)

    expect(screen.getByText('Business Law Post')).toBeInTheDocument()
  })

  it('does not render card title', () => {
    mockProps.title = ''
    renderWithTheme(<ArticleCard {...mockProps} />)

    expect(screen.queryByText('Business Law Post')).toBeNull()
  })
})
