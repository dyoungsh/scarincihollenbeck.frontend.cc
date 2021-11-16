import { render, screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../components/test-util'
import Container from '../Container'

describe('<Container />', () => {
  it('renders children', () => {
    renderWithTheme(
      <Container>
        <p>Hello World!</p>
      </Container>
    )

    expect(screen.getByText('Hello World!')).toBeInTheDocument()
  })
})
