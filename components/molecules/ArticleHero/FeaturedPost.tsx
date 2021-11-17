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
  date: string
  authors: {
    name: string
    link: string
  }[]
  excerpt: string
}

const FeaturedPost: React.FC<Props> = ({ slug, image, title, authors, date, excerpt }: Props) => {
  return (
    <ArticleContainer>
      <Link href={slug}>
        <a>
          <Image src={image} alt={title} width={750} height={350} layout="intrinsic" />
          <Title>{title}</Title>
        </a>
      </Link>
      <Details>
        <p>
          <strong>Published: </strong> {date}
        </p>
        <p>
          <strong>Author: </strong>{' '}
          {authors.map((a) =>
            a.name === 'Scarinci Hollenbeck' ? (
              <span key={a.name}>{a.name}</span>
            ) : (
              <a key={a.name} href={a.link.replace('wp.', '')}>
                {a.name}
              </a>
            )
          )}
        </p>
      </Details>
      <Description dangerouslySetInnerHTML={createMarkup(excerpt)} />
    </ArticleContainer>
  )
}

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 48px;

  a {
    color: inherit;
  }
`

const Title = styled.p`
  ${(props) => props.theme.fonts.xxl};
  font-family: ${(props) => props.theme.fonts.proximaBold};
  color: ${(props) => props.theme.colors.red};
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.fonts.lg};
  width: 100%;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.black};

  p {
    margin-bottom: 8px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    p {
      margin-right: 16px;
    }
  }
`

const Description = styled.div`
  ${(props) => props.theme.fonts.lg};
  margin-top: 16px;
`

export default FeaturedPost
