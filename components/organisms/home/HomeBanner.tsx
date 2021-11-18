import React from 'react'
import styled from 'styled-components'

const HomeBanner = () => (
  <Banner>
    <RedBanner className="animate__animated animate__fadeInLeft animate__slow">
      <TextContainer>
        <Text className="animate__animated animate__fadeInDown animate__slow">
          Ready to rebuild?
        </Text>
        <Text className="animate__animated animate__fadeInDown animate__slow">
          <strong>We are here to help</strong>
        </Text>
      </TextContainer>
    </RedBanner>
  </Banner>
)

const Banner = styled.div`
  background: url(/images/nynj-sunrise-banner.webp) no-repeat center center;
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

const RedBanner = styled.div`
  background-image: url(/images/red-banner-home.webp);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    width: 60%;
  }
`
const TextContainer = styled.div`
  margin: 15em 13em;
`
const Text = styled.p`
  ${(props) => props.theme.fonts.xxxxxxxl};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 3px 3px 3px #000;
  line-height: 1.2 !important;

  &:first-child {
    margin-bottom: -15px;
  }
`

export default HomeBanner
