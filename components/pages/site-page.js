import PagesBody from 'components/organisms/page/body'
import SingleSubHeader from 'layouts/single-sub-header'
import { NextSeo } from 'next-seo'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function SitePage({ seo, site, canonicalUrl, bodyContent }) {
  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={canonicalUrl} />
      <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
      <Container>
        <Row>
          <Col sm={12}>
            <PagesBody content={bodyContent} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
