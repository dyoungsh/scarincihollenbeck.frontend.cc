import React from 'react'
import styled from 'styled-components'

const MainTag = () => (
  <TextContainer>
    <h1>
      <strong>
        As one of the most dynamic law firms in the New Jersey/New York Metropolitan Region, the
        attorneys at Scarinci Hollenbeck provide a broad range of legal services to a diverse group
        of clients.
      </strong>
    </h1>
    <Space>
      <h2>
        <strong>
          We support and advance our clients’ initiatives through innovative solutions to complex
          legal problems.
        </strong>
      </h2>
    </Space>
  </TextContainer>
)

const TextContainer = styled.div`
  text-align: center;
  margin: 4rem 3rem;

  h1 {
    ${(props) => props.theme.fonts.xxxxxl}
  }

  h2 {
    ${(props) => props.theme.fonts.xxxxl}
  }
`

const Space = styled.span`
  margin: 1.5rem 0;
  display: block;
  color: ${(props) => props.theme.colors.secondaryRed};
`

export default MainTag
