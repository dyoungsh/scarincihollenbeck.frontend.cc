import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../test-util'
import ProfileCard from '../ProfileCard'

const mockProps = {
  name: 'Dan Brecher',
  slug: '/attorney/dan-brecher',
  image:
    'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',

  title: ['Counsel'],
  location: 'New York, NY',
  email: 'dbrecher@sh-law.com',
}

describe('<ProfileCard />', () => {
  it('render profile name', () => {
    renderWithTheme(<ProfileCard {...mockProps} />)

    expect(screen.getByText('Dan Brecher')).toBeInTheDocument()
  })

  it('does not render title', () => {
    mockProps.title = []
    renderWithTheme(<ProfileCard {...mockProps} />)

    expect(screen.queryByText('Counsel')).toBeNull()
  })
})
