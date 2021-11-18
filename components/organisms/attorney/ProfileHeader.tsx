import ProfileImage from 'components/molecules/attorney/ProfileImage'
import Container from 'layouts/Container'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Chair, Office, SocialMedia } from 'types/Attorney'

interface Props {
  image: string
  slug: string
  profile: {
    name: string
    title: string
    chair: Chair[]
    coChair: Chair[]
    offices: Office[]
    phoneNumber: string
    email: string
    pdf: string
    fax: string
    vizibility: string
    socialMedia: SocialMedia[]
    additionalHeaderLinks: boolean
  }
}
const AttorneyProfileHeader: React.FC<Props> = ({ image, slug, profile }: Props) => {
  const [designation, setDesiganation] = useState(profile.title)
  const {
    name,
    title,
    chair,
    coChair,
    offices,
    phoneNumber,
    email,
    pdf,
    fax,
    vizibility,
    socialMedia,
    additionalHeaderLinks,
  } = profile

  const contact = { phoneNumber, email }
  const linkedIn = socialMedia.filter((a) => a.channel === 'LinkedIn')[0]

  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesiganation('Red Bank, NJ  Office Managing Partner')
    }

    if (title === 'NYC Managing Partner') {
      setDesiganation('NYC Office Managing Partner')
    }

    if (title === 'Managing Partner') {
      setDesiganation('Firm Managing Partner')
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesiganation('Washington, D.C. Office Managing Partner')
    }
  })

  return (
    <ProfileBackground>
      <Container>
        <ProfileContainer>
          <ProfileImage image={image} alt={name} />
          <Card>Attorney details here...</Card>
        </ProfileContainer>
      </Container>
    </ProfileBackground>
  )
}

const ProfileBackground = styled.div`
  background: url(/images/dark-blue-banner.webp) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  border-top: 5px solid #000;
  border-bottom: 5px solid #000;
  margin-bottom: 1.5em;
  height: auto;
`

const ProfileContainer = styled.div`
  margin: 64px 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

const Card = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 50%;
    margin-left: 48px;
    color: ${(props) => props.theme.colors.white};
  }
`

export default AttorneyProfileHeader
