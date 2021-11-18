import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { createMarkup } from 'utils/helpers'

interface Props {
  slug: string
  image: string
  title: string
  description: string
}

const ArticleCard: React.FC<Props> = ({ slug, image, title, description }: Props) => {
  return (
    <Card>
      <Link href={slug}>
        <a>
          <Image src={image} alt={title} width={300} height={150} layout="fixed" />
        </a>
      </Link>
      <Link href={slug}>
        <a>
          <Title>{title}</Title>
          <Details dangerouslySetInnerHTML={createMarkup(description)} />
        </a>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  ${(props) => props.theme.fonts.lg};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  display: flex;
  flex-direction: column;
  width: 300px;
  transition: all 0.2s;
  margin: auto;
  margin-bottom: 24px;

  &:hover {
    background-color: ${(props) => props.theme.colors.offWhite};
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }

  span {
    img {
      transition: all 0.2s;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    height: 150px;
    width: 100%;

    span {
      img {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-top-right-radius: 0px;
      }
    }
  }
`

const Title = styled.p`
  ${(props) => props.theme.fonts.md};
  margin: 12px;
  font-family: ${(props) => props.theme.fonts.proximaBold};
`

const Details = styled.div`
  ${(props) => props.theme.fonts.sm};
  margin: 12px;
`

export default ArticleCard
