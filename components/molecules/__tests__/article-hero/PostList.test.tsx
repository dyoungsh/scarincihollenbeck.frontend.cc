import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import PostList from '../../home/article-hero/PostList'

const mockProps = {
  articleList: [
    {
      id: 1,
      slug: '/business-law-post',
      image:
        'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',
      title: 'Business Law Post',
      description: '...',
    },
    {
      id: 2,
      slug: '/business-law-post-2',
      image:
        'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',
      title: 'Business Law Post 2',
      description: '...',
    },
  ],
}

describe('<PostList />', () => {
  it('renders post title', () => {
    renderWithTheme(<PostList {...mockProps} />)

    expect(screen.getByText('Business Law Post 2')).toBeInTheDocument()
  })

  it('does not render list of posts', () => {
    mockProps.articleList = []
    renderWithTheme(<PostList {...mockProps} />)

    expect(screen.queryByText('Business Law Post 2')).toBeNull()
  })
})
