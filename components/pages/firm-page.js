import SubscriptionMessage from 'components/molecules/subscription/subscription-message'
import PageArticleHero from 'components/organisms/page/page-article-hero'
import SidebarContent from 'components/organisms/practice/sidebar'
import SingleSubHeader from 'layouts/single-sub-header'
import { NextSeo } from 'next-seo'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import grayTitleStyles from 'styles/BigGrayTitle.module.css'
import lineHeaderStyles from 'styles/LineHeader.module.css'
import sidebarStyles from 'styles/Sidebar.module.css'
import { FIRM_BLOG_PAGES } from 'utils/constants'
import { createMarkup } from 'utils/helpers'

export default function FirmPage({ page, relatedPages, canonicalUrl }) {
  return (
    <>
      <NextSeo title={page.seo.title} description={page.seo.metaDesc} canonical={canonicalUrl} />
      <SingleSubHeader title={page.title} subtitle={page.description} span={6} offset={0} />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            {page.tabs.map((tab) => (
              <div key={tab.title}>
                <h4 className={`${grayTitleStyles.title} text-capitalize w-100`}>{tab.title}</h4>
                <div dangerouslySetInnerHTML={createMarkup(tab.content)} />
              </div>
            ))}
            {page.attorneysMentioned.length > 0 && (
              <>
                <div className={lineHeaderStyles.lineHeader}>
                  <h3>Recent from the firm</h3>
                </div>
                <div className="my-5">
                  <PageArticleHero
                    link={page.title.replace(/\s+/g, '-').toLowerCase()}
                    content={page.attorneysMentioned}
                  />
                </div>
              </>
            )}
          </Col>
          <Col sm={12} md={3} className={sidebarStyles.container}>
            <SubscriptionMessage />
            <hr />
            <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
            <hr />
            <SidebarContent title="Diversity" content={relatedPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
