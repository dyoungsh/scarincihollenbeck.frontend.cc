import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Office } from 'types/Home'

interface Props {
  location: Office
}

const LocationCard: React.FC<Props> = ({ location }: Props) => {
  return (
    <LocationContainer>
      <Card>
        <Link href={location.slug}>
          <a>
            <Image
              src={location.featuredImg}
              alt={location.title}
              width={325}
              height={215}
              layout="fixed"
            />
            <p>{location.title}</p>
          </a>
        </Link>
      </Card>
    </LocationContainer>
  )
}

const LocationContainer = styled.div`
  margin 2rem;
`

const Card = styled.div`
  border: 0.5px solid ${(props) => props.theme.colors.gray};
  border-radius: 8px;

  a {
    color: inherit;
    span {
      img {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        display: block;
        transition: all .2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
   

    p {
      ${(props) => props.theme.fonts.lg};
      padding 0 8px;
      font-family: ${(props) => props.theme.fonts.proximaBold};
      color: ${(props) => props.theme.colors.secondaryRed};
    }
  }
`
export default LocationCard
