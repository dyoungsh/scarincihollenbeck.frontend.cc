import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { createMarkup } from 'utils/helpers'

interface Props {
  id: number
  slug: string
  image: string
  title: string
  description: string
}

const ArticleCard: React.FC<Props> = ({ id, slug, image, title, description }: Props) => {
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
  flex-direction: row;
  height: 150px;
  width: 100%;
  margin: auto;
  transition: all 0.2s;
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

      &:hover {
        transform: scale(1.1);
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
