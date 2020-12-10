import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Error from 'pages/_error';
import SiteLoader from 'components/site-loader';
import Footer from 'components/footer';
import MultiSubHeader from 'layouts/multi-sub-header';
import ProfileImage from 'components/singleattorney/profile-image';
import InfoCard from 'components/singleattorney/info-card';
import Biography from 'components/singleattorney/biography';
import Matters from 'components/singleattorney/matters';
import TableTab from 'components/singleattorney/table';
import Articles from 'components/singleattorney/articles';
import NonGraphQlArticles from 'components/singleattorney/non-graphql-articles'
import VideoTab from 'components/singleattorney/video-content';
import BasicContent from 'components/singleattorney/basic-content';
import ClientSlider from 'components/singleattorney/client-slider';
import AwardSlider from 'components/singleattorney/award-slider';
import SidebarPracticeList from 'components/singleattorney/sidebar-practice-list';
import SidebarInformationList from 'components/singleattorney/sidebar-information-list';
import NonGraphQLSlider from 'components/singleattorney/non-graphql-slider';
import RelatedArticles from 'components/singleattorney/related-articles';
import ErrorMessage from 'components/error-message';
import { headers, sortByDateKey } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import { singleAttorneyQuery, attorneysArticles, getAllAttorneySlugs } from 'queries/attorneys';
import client from 'utils/graphql-client';
import tabStyle from 'styles/BigButtonTabs.module.css'

// build out attorney profile schema
function buildAttorneyProfileSchema(name, url, imageUrl, socialMediaLinks, jobTitle) {
  let links;

  if (socialMediaLinks.length > 0) {
    links = socialMediaLinks.map((link) => link.url);
  }

  if (socialMediaLinks.length === 0) {
    links = [
      'https://www.facebook.com/ScarinciHollenbeck/',
      'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
    ];
  }

  return {
    '@graph': [{
      '@context': 'https://schema.org/',
      '@type': 'Person',
      name,
      url,
      image: imageUrl,
      sameAs: links,
      jobTitle,
      worksFor: {
        '@type': 'Organization',
        name: 'Scarinci Hollenbceck',
      },
    }],
  };
}

export default function Attorney({ status, bio, response }) {
  const router = useRouter();
  
  if (status === 404) {
    return <Error statusCode={404} />;
  }

  if(router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    )
  }

  const { data: attorneyNews, error: attorneyNewsErr } = useSWR(attorneysArticles("Firm News", response.title), (query) =>
    request('https://wp.scarincihollenbeck.com/graphql', query)
  );

  const { data: attorneyEvents, error: attorneyEventsErr } = useSWR(attorneysArticles("Firm Events", response.title), (query) =>
    request('https://wp.scarincihollenbeck.com/graphql', query)
  );

  if (attorneyEventsErr || attorneyNewsErr) return <ErrorMessage />
  if (!attorneyEvents || !attorneyNews) return (
    <div className="my-5 py-5">
      <SiteLoader />
    </div>
  )

  // concat all the firm events and firm news into a single array
  const firmNewsAndEventsArr = [].concat(attorneyEvents.categories.nodes[0].posts.edges, attorneyNews.categories.nodes[0].posts.edges)

  // set bio tabs
  const tabs = response.attorneyAdditionalTabs;

  return (
    <>
      {/** Bio head tag information -- start */}
      <NextSeo
        title={response.seo.title}
        description={response.seo.metaDesc}
        canonical={`https://scarincihollenbeck.com${response.uri}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${response.uri}`,
          title: 'Scarinci Hollenbeck',
          description: response.seo.metaDesc,
          images: [
            {
              url: response.attorneyMainInformation.profileImage.sourceUrl,
              width: 200,
              height: 220,
              alt: response.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${response.uri}`,
          cardType: response.seo.metaDesc,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
        />
        <script
          key="ScarinciHollenbeck Bio Profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildAttorneyProfileSchema(
              response.title,
              `https://scarincihollenbeck.com/${response.uri}`,
              response.attorneyMainInformation.profileImage.sourceUrl,
              response.attorneyMainInformation.socialMediaLinks,
              response.attorneyMainInformation.designation,
            )),
          }}
        />
      </Head>
      {/** Bio head tag information -- end */}
      {/** Bio Image & Info Card  -- start*/}
      <MultiSubHeader
        image="/images/Columns-1800x400-JPG.jpg"
        profile={(
          <ProfileImage
            image={response.attorneyMainInformation.profileImage.sourceUrl}
            name={response.title}
            width={330}
            height={350}
          />
        )}
        height="auto"
        infoCard={(
          <InfoCard
            fullName={response.title}
            chair={bio.chair}
            coChair={bio.coChair}
            designation={response.attorneyMainInformation.designation}
            phoneNumber={response.attorneyMainInformation.phoneNumber}
            fax={response.attorneyMainInformation.faxNumber}
            email={response.attorneyMainInformation.email}
            socialMediaLinks={response.attorneyMainInformation.socialMediaLinks}
            pdf={(response.attorneyMainInformation.pdfBio) ? response.attorneyMainInformation.pdfBio.sourceUrl : ''}
            vizibility={response.attorneyMainInformation.vizibility}
            offices={response.attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation}
          />
          )}
      />
      {/** Bio Image & Info Card  -- end*/}
      {/** Start of body content -- start */}
      <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
        <Container>
          <Row>
            {/** End of navigation -- start*/}
            <Col sm={12}>
              <Nav>
                <Nav.Link eventKey="biography" className={tabStyle.tab}>Biography</Nav.Link>
                {(response.attorneyRepresentativeMatters.repMatters) && (
                  <Nav.Link
                    eventKey="representative-matters"
                    className={tabStyle.tab}
                  >
                    Representative Matters
                  </Nav.Link>
                )}
                {(response.attorneyRepresentativeClients.repClients) && (
                  <Nav.Link
                    eventKey="represntative-clients"
                    className={tabStyle.tab}
                  >
                    Representative Clients
                  </Nav.Link> 
                )}
                { (bio.presentations) && (
                  <Nav.Link
                    eventKey="presentations"
                    className={tabStyle.tab}
                  >
                    Presentations
                  </Nav.Link>
                )}
                {(bio.publications) && (
                  <Nav.Link
                    eventKey="publications"
                    className={tabStyle.tab}
                  >
                    Publications
                  </Nav.Link>
                )}
                {(bio.media) && (
                  <Nav.Link
                    eventKey="media"
                    className={tabStyle.tab}
                  >
                    Media
                  </Nav.Link>
                )}
                {(bio.blogPosts.length > 0) && (
                    <Nav.Link
                    eventKey="blogs"
                    className={tabStyle.tab}
                  >
                    Articles
                  </Nav.Link>
                )}
                {(firmNewsAndEventsArr.length > 0) && (
                  <Nav.Link
                    eventKey="newsevents"
                    className={tabStyle.tab}
                  >
                    News &amp; Events
                  </Nav.Link> 
                )}
                {(response.attorneyAwardsClientsBlogsVideos.attorneyVideos) && (
                  <Nav.Link
                    eventKey="videos"
                    className={tabStyle.tab}
                  >
                    Videos
                  </Nav.Link>
                )}
                {(tabs.tabHeader1) && (
                  <Nav.Link
                    key={tabs.tabHeader1}
                    eventKey={tabs.tabHeader1}
                    className={tabStyle.tab}
                  >
                    {tabs.tabHeader1}
                  </Nav.Link>
                )}
                {(tabs.tabHeader2) && (
                  <Nav.Link key={tabs.tabHeader2} eventKey={tabs.tabHeader2} className={tabStyle.tab}>{tabs.tabHeader2}</Nav.Link>
                )}
                {(tabs.tabHeader3) && (
                  <Nav.Link
                    key={tabs.tabHeader3}
                    eventKey={tabs.tabHeader3}
                    className={tabStyle.tab}
                  >
                    {tabs.tabHeader3}
                  </Nav.Link>
                )}
                {(tabs.tabHeader4) && (
                  <Nav.Link
                    key={tabs.tabHeader4}
                    eventKey={tabs.tabHeader4}
                    className={tabStyle.tab}
                  >
                    {tabs.tabHeader4}
                  </Nav.Link>
                )}
                {(tabs.tabHeader5) && (
                  <Nav.Link
                    key={tabs.tabHeader5}
                    eventKey={tabs.tabHeader5}
                    className={tabStyle.tab}
                  >
                    {tabs.tabHeader5}
                  </Nav.Link>
                )}
              </Nav>
            </Col>
            {/** Navigation -- end */}
            {/** Body tab content -- start */}
            <Col sm={12} md={9} className="mt-4">
              <TabContent>
                <Biography
                  tabTitle="biography"
                  title="Biography"
                  content={response.attorneyBiography.biographyContent} />
              </TabContent>
              {(response.attorneyRepresentativeMatters.repMatters) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-matters"
                      title="Representative Matters"
                      content={response.attorneyRepresentativeMatters.repMatters}
                    />
                  </TabContent>
                )}
              {(response.attorneyRepresentativeClients.repClients) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-clients"
                      title="Representative Clients"
                      content={response.attorneyRepresentativeClients.repClients}
                    />
                  </TabContent>
                )}
                {(bio.presentations) && (
                  <TabContent>
                    <TableTab
                      tabTitle="presentations"
                      title="Presentations"
                      content={bio.presentations}
                    />
                  </TabContent>
                )}
                {(bio.publications) && (
                  <TabContent>
                    <TableTab
                      tabTitle="publications"
                      title="Publications"
                      content={bio.publications}
                    />
                  </TabContent>
                )}
                {(bio.media) && (
                  <TabContent>
                    <TableTab
                      tabTitle="media"
                      title="Media"
                      content={bio.media}
                    />
                  </TabContent>
                )}
                {(bio.blogPosts.length > 0) && (
                  <TabContent>
                    <NonGraphQlArticles tabTitle="blogs" title="Articles" content={sortByDateKey(bio.blogPosts, 'date')} />
                  </TabContent>
                )}
                {(firmNewsAndEventsArr.length > 0) && (
                  <TabContent>
                    <Articles tabTitle="newsevents" title="News &amp; Events" content={firmNewsAndEventsArr} />
                  </TabContent>
                )}
                {(response.attorneyAwardsClientsBlogsVideos.attorneyVideos) && (
                  <TabContent>
                    <VideoTab
                      title="Videos"
                      content={response.attorneyAwardsClientsBlogsVideos.attorneyVideos}
                      tabTitle="videos"
                    />
                  </TabContent>
                )}
                {(tabs.tabHeader1 && tabs.tabContent1) && (
                  <TabContent>
                    <BasicContent key={tabs.tabHeader1} title={tabs.tabHeader1} content={tabs.tabContent1} tabTitle={tabs.tabHeader1} />
                  </TabContent>

                )}
                {(tabs.tabHeader2 && tabs.tabContent2) && (
                  <TabContent>
                    <BasicContent key={tabs.tabHeader2} title={tabs.tabHeader2} content={tabs.tabContent2} tabTitle={tabs.tabHeader2} />
                  </TabContent>

                )}
                {(tabs.tabHeader3 && tabs.tabContent3) && (
                  <TabContent>
                    <BasicContent key={tabs.tabHeader3} title={tabs.tabHeader3} content={tabs.tabContent3} tabTitle={tabs.tabHeader3} />
                  </TabContent>
                )}
                {(tabs.tabHeader4 && tabs.tabContent4) && (
                 <TabContent>
                    <BasicContent key={tabs.tabHeader4} title={tabs.tabHeader4} content={tabs.tabContent4} tabTitle={tabs.tabHeader4} />
                 </TabContent>
                )}
                {(tabs.tabHeader5 && tabs.tabContent5) && (
                 <TabContent>
                    <BasicContent key={tabs.tabHeader5} title={tabs.tabHeader5} content={tabs.tabContent5} tabTitle={tabs.tabHeader5} />
                 </TabContent>
                )}
                {/** start of bottom page carousels -- start */}
                {(response.attorneyAwardsClientsBlogsVideos.awards) && <AwardSlider content={response.attorneyAwardsClientsBlogsVideos.awards} />}
                {(response.attorneyAwardsClientsBlogsVideos.clients) && <ClientSlider content={response.attorneyAwardsClientsBlogsVideos.clients} />}
                {(firmNewsAndEventsArr.length > 0 && response.title !== "Donald Scarinci") && <RelatedArticles title="News & Events" content={firmNewsAndEventsArr} />}
                { (bio.blogPosts) && (bio.blogPosts.length > 0) && <NonGraphQLSlider title="Recent Articles" content={sortByDateKey(bio.blogPosts, 'date')} />}
                {/** start of bottom page carousels -- end */}
            </Col>
            {/** Body tab content --end */}
            {/** Sidebar content -- start */}
            <Col sm={12} md={3} className="mt-4">
                <SidebarPracticeList
                  content={response.attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices}
                  itemKey={2}
                />
                <br />
                <SidebarInformationList
                  itemKey={1}
                  content={response.attorneyAdditionalInformationEducationAdmissionsAffiliations}
                />
              </Col>
            {/** Sidebar content -- end */}
          </Row>
        </Container>
      </TabContainer>
      {/** End of body content -- end */}
      {/** Footer -- start */}
      <Footer />
      {/** Footer -- end */}
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(getAllAttorneySlugs, {});

  return {
    paths: res.data.attorneyProfiles.nodes.map((a) => `/attorney/${a.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params, res }) {
  const status = 200;

  // keep bio for presentations, publications & blogs
  const [bio] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-attorney/attorney/${params.slug}`, { headers }).then((data) => data.json()),
  ]);

  // fetch everything else from graphql
  const attorneyBioContent = await client.query(singleAttorneyQuery(params.slug), {});


  if(!res && attorneyBioContent.data.attorneyProfiles.edges[0].node.length <= 0 && bio.status === 404) {
    status = 404;
    return {
      props: {
        status,
        bio: [],
        response: [],
      },
      notFound: true
    };
  }

  return {
    props: {
      status,
      bio,
      response: attorneyBioContent.data.attorneyProfiles.edges[0].node,
    },
    revalidate: 1
  };
}
