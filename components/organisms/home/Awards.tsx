import React from 'react'
import styled from 'styled-components'
import LineTitle from 'components/atoms/LineTitle'
import PageLink from 'components/molecules/home/PageLink'
import Accolade from 'components/molecules/home/Accolade'

import { AWARDS } from 'utils/constants'

const Awards = () => {
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
`

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  margin-bottom: 48px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

export default Awards
