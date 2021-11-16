import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Hit from '../../global-search/Hit'

const mockProps = {
  hit: {
    permalink: 'https://wp.scarincihollenbeck.com/environmental-post',
    post_type_label: 'Post',
    post_title: 'Environmental Article',
    post_type: 'post',
    post_author: {
      display_name: 'Daniel T. McKillop',
    },
    post_date_formatted: 'January 1, 2022',
  },
}

describe('<Hit />', () => {
  it('renders default post title', () => {
    renderWithTheme(<Hit {...mockProps} />)

    expect(screen.getByText('Environmental Article')).toBeInTheDocument()
  })

  it('renders changed post title', () => {
    mockProps.hit.post_title = 'Business Post'
    renderWithTheme(<Hit {...mockProps} />)

    expect(screen.getByText('Business Post')).toBeInTheDocument()
  })
})
