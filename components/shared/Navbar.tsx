import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from 'layouts/Container'
import GlobalSearch from 'components/shared/GlobalSearch'
import TopNavLinks from 'components/organisms/navbar/TopNavLinks'
import SiteNavs from 'components/organisms/navbar/SiteNavs'
import SiteLogo from 'components/organisms/navbar/SiteLogo'
import MobileNav from 'components/organisms/navbar/MobileNav'

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(true)
      if (e.target.documentElement.scrollTop < 135) {
        setScrollTop(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <Header>
      <Container>
        <RowOne>
          <GlobalSearch />
          <TopNavLinks />
        </RowOne>
        <RowTwo>
          <SiteLogo scrollTop={scrollTop} />
          <MainNav scrollTop={scrollTop}>
            <SiteNavs />
          </MainNav>
          <MobileNavContainer>
            <MobileNav />
          </MobileNavContainer>
        </RowTwo>
      </Container>
    </Header>
  )
}

const Header = styled.header`
  margin-bottom: 0;
  padding-top: 0.25rem;
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  position: sticky;
  top: 0;

  z-index: 1020;
  background-color: ${(props) => props.theme.colors.white};
`

const RowOne = styled.div`
  margin: 0.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryGray};
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 8px;
  }
`

const RowTwo = styled.div`
  display: flex;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    flex-direction: row;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`

interface MainNavProps {
  scrollTop: boolean
}

const MainNav = styled.div<MainNavProps>`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    display: initial;
    position: ${({ scrollTop }) => (scrollTop ? 'relative' : 'static')};
    top: ${({ scrollTop }) => (scrollTop ? '-7px' : '5px')};
    margin: ${({ scrollTop }) => (scrollTop ? '0 auto' : '0')};
  }
`

const MobileNavContainer = styled.div`
  display: initial;

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    display: none;
  }
`

export default NavBar
