import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  name: string
  slug: string
  image: string
  title: string[]
  location?: string
  email?: string
}
const ProfileCard: React.FC<Props> = ({ name, image, slug, title, location, email }: Props) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Link href={slug}>
          <a>
            <Image src={image} alt={name} width={104} height={144} layout="fixed" />
          </a>
        </Link>
      </ImageContainer>
      <Details>
        <Link href={slug}>
          <a>
            {name && <p>{name}</p>}
            {title && (
              <div>
                <strong>Chair</strong>
                <ChairList>
                  {title.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ChairList>
              </div>
            )}
            {email && (
              <p>
                <strong>Email</strong> <a href={`mailto:${email}`}>{email}</a>
              </p>
            )}
          </a>
        </Link>
      </Details>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  ${(props) => props.theme.fonts.lg};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 144px;
  width: 420px;
  margin: auto;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.offWhite};
    cursor: pointer;
  }
`

const ImageContainer = styled.div`
  a {
    span {
      img {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 12px;
  height: 148px;

  a {
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
`

const ChairList = styled.ul`
  ${(props) => props.theme.fonts.md};
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export default ProfileCard
