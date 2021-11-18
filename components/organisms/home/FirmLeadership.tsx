import LineTitle from 'components/atoms/LineTitle'
import ProfileCard from 'components/atoms/ProfileCard'
import React from 'react'
import styled from 'styled-components'
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
  margin: auto;
  margin-top: 96px;
  padding: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0;
  }
`
const LeaderContainer = styled.div`
  margin-top: 92px;
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
