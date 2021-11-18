import LineTitle from 'components/atoms/LineTitle'
import Accolade from 'components/molecules/home/Accolade'
import PageLink from 'components/molecules/home/PageLink'
import React from 'react'
import styled from 'styled-components'
import { AWARDS } from 'utils/constants'

const FirmAwards = () => {
  return (
    <BlockContainer>
      <LineTitle title="Awards & Accolades" />
      <AwardContainer>
        {AWARDS.map((award) => (
          <Accolade award={award} key={award.alt} />
        ))}
      </AwardContainer>
      <PageLink label="Award Methodology" slug="/awards" />
    </BlockContainer>
  )
}

const BlockContainer = styled.div`
  margin-top: 96px;
  padding: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding 0;
  }
`

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  margin-bottom: 48px;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    padding: 0;
  }
`

export default FirmAwards
