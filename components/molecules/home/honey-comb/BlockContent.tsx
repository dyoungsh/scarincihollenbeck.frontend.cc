import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  url: {
    label: string
    slug: string
  }
}

const BlockContent: React.FC<Props> = ({ title, description, url }: Props) => {
  return (
    <BlockContainer>
      <BlockTitle>{title}</BlockTitle>
      <BlockDescription>{description}</BlockDescription>
      <BlockLink>
        <Link href={url.slug}>
          <a>{url.label}</a>
        </Link>
      </BlockLink>
    </BlockContainer>
  )
}

const BlockContainer = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 50%;
  }
`
const BlockTitle = styled.p`
  ${(props) => props.theme.fonts.xxxxxl};
  font-family: ${(props) => props.theme.fonts.proximaBold};
  color: ${(props) => props.theme.colors.secondaryRed};
`
const BlockDescription = styled.p`
  ${(props) => props.theme.fonts.xxl};
`
const BlockLink = styled.span`
  a {
    ${(props) => props.theme.fonts.xxl};
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.gradientRed};
    padding: 0.5em;
    margin-top: 2em;
    margin-bottom: 2em;
    display: block;
    border-radius: 8px;
    width: 250px;
    text-align: center;
  }
`

export default BlockContent
