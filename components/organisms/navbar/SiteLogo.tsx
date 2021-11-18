import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface Props {
  scrollTop: boolean
}

const SiteLogo: React.FC<Props> = ({ scrollTop }: Props) => {
  if (!scrollTop) {
    return (
      <div>
        <Link href="/">
          <a>
            <Image
              alt="Scarinci Hollenbeck, LLC"
              width={360}
              height={65}
              layout="intrinsic"
              src="/images/sh-logo-diamond.svg"
              data-testid="logo"
            />
          </a>
        </Link>
      </div>
    )
  }
  return (
    <ScrollContainer>
      <Link href="/">
        <a>Home</a>
      </Link>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.div`
  ${(props) => props.theme.fonts.xl};
  height: 35px;
  transition: all 0.1s;
  margin-top: 24px;
  display: none;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: initial;
  }

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${(props) => props.theme.colors.red};
  }

  margin: 8px 24px;

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: none;
  }
`

export default SiteLogo
