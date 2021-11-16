import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import LawPayLink from 'components/atoms/LawPayURL'

const TopNavLinks = () => (
  <LinksContainer>
    <ContactContainer>
      <strong>201-896-4100</strong>
      <strong> | </strong>
      <strong>info@sh-law.com</strong>
    </ContactContainer>
    <FeaturedLinks>
      <Link href="/subscribe">
        <a>Join our mailing list</a>
      </Link>
      <LawPayLinkContainer>
        <LawPayLink />
      </LawPayLinkContainer>
    </FeaturedLinks>
  </LinksContainer>
)

const LinksContainer = styled.div`
  ${(props) => props.theme.fonts.md};
  display: flex;
  flex-direction: column;
  margin: 16px 16px 16px 24px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    margin: 8px 0;
  }
`

const ContactContainer = styled.div`
  strong:nth-child(2) {
    padding: 0 0.25rem;
  }
`

const FeaturedLinks = styled.div`
  a {
    margin: 0 6px;
    color: ${(props) => props.theme.colors.red};
    text-decoration: underline;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    a {
      position: relative;
      left: -9px;
    }
  }
`

const LawPayLinkContainer = styled.span`
  a {
    color: ${(props) => props.theme.colors.red};
  }
`

export default TopNavLinks
// export default function TopNavLinks() {
//   return (
//     <>

//       <style jsx>{'.underline { text-decoration: underline }'}</style>
//     </>
//   );
// }
