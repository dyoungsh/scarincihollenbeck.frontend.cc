import { useState, useEffect } from 'react'
import Container from 'layouts/Container'
import styled from 'styled-components'
// import HamburgerMobileMenu from 'components/shared/navbar/hamburger-mobile-menu';
import GlobalSearch from 'components/shared/global-search'
import TopNavLinks from 'components/shared/navbar/top-nav-links'
// import SiteNavs from 'components/shared/navbar/site-navs';
// import SiteLogo from 'components/shared/navbar/site-logo';
// import navBarStyles from 'styles/Navbar.module.css';

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
          <div>
            <GlobalSearch />
          </div>
          <TopNavLinks />
        </RowOne>
        {/* <Row className="my-2 border-bottom">
          <Col sm={12} md={4}>
            
          </Col>
          <Col sm={12} md={8} className={`d-flex ${navBarStyles.contactBanner} pr-0`}>
            
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            lg={6}
            className={`${navBarStyles.logoBanner} ${scrollTop ? 'mt-0' : 'mt-2'} ml-0 pl-0`}
          >
            <SiteLogo scrollTop={scrollTop} />
          </Col>
          <Col xs={12} lg={6} className={scrollTop ? 'offset-lg-3' : 'mt-sm-2 mt-lg-3 pr-0 pl-0'}>
            <SiteNavs />
            <div className={navBarStyles.mobileMenu}>
              <HamburgerMobileMenu />
            </div>
          </Col>
        </Row> */}
      </Container>
    </Header>
  )
}

const Header = styled.header`
  margin-bottom: 0;
  padding-top: 0.25rem;
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  position: sticky;
  z-index: 1020;
  background-color: ${(props) => props.theme.colors.white};
`

const RowOne = styled.div`
  margin: 0.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryGray};
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export default NavBar
