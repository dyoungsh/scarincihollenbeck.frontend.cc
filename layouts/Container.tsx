import React from 'react'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

const SiteContainer: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.breakpoints.sm};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.breakpoints.md};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: ${(props) => props.theme.breakpoints.lg};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: ${(props) => props.theme.breakpoints.xl};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: ${(props) => props.theme.breakpoints.xxl};
  }
`

export default SiteContainer
