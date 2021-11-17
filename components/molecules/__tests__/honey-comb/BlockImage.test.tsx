import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import BlockImage from '../../home/honey-comb/BlockImage'

const mockProps = {
  alt: 'Business Post',
  url: 'https://res.cloudinary.com/scarinci-hollenbeck/image/upload/v1636837934/wp.scarincihollenbeck/Business_Law_Firm_Scarinci_Hollenbeck.png',
  position: 'left',
}
describe('<BlockImage />', () => {
  it('renders img alt', () => {
    renderWithTheme(<BlockImage {...mockProps} />)

    expect(screen.getByAltText('Business Post')).toBeInTheDocument()
  })
})
