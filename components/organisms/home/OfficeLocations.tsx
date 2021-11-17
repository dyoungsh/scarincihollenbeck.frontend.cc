import React from 'react'
import styled from 'styled-components'
import LineTitle from 'components/atoms/LineTitle'
import LocationCard from 'components/molecules/LocationCard'
import { Office } from 'types/Home'

interface Props {
  locations: Office[]
}
const OfficeLocations: React.FC<Props> = ({ locations }: Props) => {
  return (
    <BlockContainer>
      <LineTitle title="Office Locations" />
      <LocationContainer>
        {locations.map((location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </LocationContainer>
    </BlockContainer>
  )
}

const BlockContainer = styled.div`
  margin-top: 96px;
`

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    margin-top: 48px;
  }
`

export default OfficeLocations
