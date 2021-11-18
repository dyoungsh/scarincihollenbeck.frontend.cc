import CommonSidebarLinks from 'components/molecules/common-sidebar-links'
import SubscriptionBody from 'components/molecules/subscription/subscription-body'
import SingleSubHeader from 'layouts/single-sub-header'
import { NextSeo } from 'next-seo'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import sidebarStyles from 'styles/Sidebar.module.css'

export default function SubscriptionPage({ site, seo }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            <SubscriptionBody />
          </Col>
          <Col sm={12} md={3} className={sidebarStyles.container}>
            <CommonSidebarLinks />
          </Col>
        </Row>
      </Container>
    </>
  )
}
