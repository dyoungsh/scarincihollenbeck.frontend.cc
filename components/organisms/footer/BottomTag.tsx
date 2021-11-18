import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'

const BottomTag = () => (
  <Container>
    <TagContainer>
      <div>Diamond, attorney advertiseming stuff</div>
      <div>Footer Links..</div>
    </TagContainer>
  </Container>
)

const TagContainer = styled.div`
  display: flex;
  flex-direction: columns;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    margin: 32px 0;
  }
`

export default BottomTag
