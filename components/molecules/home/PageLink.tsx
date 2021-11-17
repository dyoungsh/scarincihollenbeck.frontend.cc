import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  label: string
  slug: string
}

const PageLink: React.FC<Props> = ({ label, slug }: Props) => {
  return (
    <LinkContainer>
      <Link href={slug}>
        <a>{label}</a>
      </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;

  a {
    color: ${(props) => props.theme.colors.secondaryRed};
    ${(props) => props.theme.fonts.xxl};
    font-family: ${(props) => props.theme.fonts.proximaBold};
  }

  a:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.red};
  }
`

export default PageLink
