import React from 'react'
import styled from 'styled-components'

interface Props {
  title: string
}

const LineTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <LineTitleContainer>
      <p>{title}</p>
    </LineTitleContainer>
  )
}

const LineTitleContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.black};
  text-align: center;

  p {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    display: inline-block;
    ${(props) => props.theme.fonts.xxxl};
    letter-spacing: 0.15em;
    margin-bottom: 0;
    padding: 0 15px;
    position: relative;
    text-transform: uppercase;
    top: 13px;
  }
`

export default LineTitle
