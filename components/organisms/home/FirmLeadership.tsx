import React from 'react'
import styled from 'styled-components'
import LineTitle from 'components/atoms/LineTitle'
import ProfileCard from 'components/atoms/ProfileCard'
import { Leadership } from 'types/Home'

interface Props {
  leadership: Leadership[]
}
const FirmLeadership: React.FC<Props> = ({ leadership }: Props) => {
  return (
    <BlockContainer>
      <LineTitle title="Our Leadership" />
      <LeaderContainer>
        {leadership.map((leader) => (
          <ProfileCard {...leader} key={leader.name} />
        ))}
      </LeaderContainer>
    </BlockContainer>
  )
}

const BlockContainer = styled.div`
  margin-top: 96px;
`
const LeaderContainer = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div {
    margin-bottom: 24px;
  }
`

export default FirmLeadership
