import React from 'react'
import styled from 'styled-components'
import LineTitle from 'components/atoms/LineTitle'

const Leadership = ({ attorneys }) => {
  return (
    <LeaderContainer>
      <LineTitle title="Our Leadership" />
    </LeaderContainer>
  )
}

const LeaderContainer = styled.div`
  margin-top: 96px;
`

export default Leadership
