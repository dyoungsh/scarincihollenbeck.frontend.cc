import LineTitle from 'components/atoms/LineTitle'
import PageLink from 'components/molecules/home/PageLink'
import React from 'react'
import styled from 'styled-components'

const WhoWeAre = () => (
  <BlockContainer>
    <LineTitle title="Who We Are" />
    <Block>
      <p>
        With a growing practice of more than 60 experienced attorneys, Scarinci Hollenbeck is a
        regional alternative to a National 250 law firm. With offices in New Jersey, New York City,
        and the District of Columbia, we serve the niche practice areas most often required by
        institutions, corporations, entities, and the people who own and control them.
      </p>
      <p>
        Since the firm was founded in 1988, we have maintained our reputation for getting things
        done. Most attorneys at Scarinci Hollenbeck have significant experience in their practice
        areas, and have published and lectured on current topics in their field.
      </p>
    </Block>
    <PageLink label="More from our firm" slug="/firm-overview" />
  </BlockContainer>
)

const BlockContainer = styled.div`
  margin: auto;
  margin-top: 36px;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0;
  }
`

const Block = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 56px;

  p {
    ${(props) => props.theme.fonts.xxl}
  }
`

export default WhoWeAre
