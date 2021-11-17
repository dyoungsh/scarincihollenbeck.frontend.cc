import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Container from 'layouts/Container'
import HomeBanner from 'components/organisms/home/HomeBanner'
import HoneyComb from 'components/organisms/home/HoneyComb'
import HomeLocations from 'components/organisms/home/locations'
import MainTag from 'components/organisms/home/MainTag'
import HomeOurLeadership from 'components/organisms/home/our-leadership'
import HomeReviews from 'components/organisms/home/reviews'
import HomeWhoWeAreSection from 'components/organisms/home/who-we-are-section'
import HomePageLink from 'components/organisms/home/page-link'
import ArticleHero from 'components/shared/article-hero'
import { sortByKey } from 'utils/helpers'
import styles from 'styles/Home.module.css'
import marginStyles from 'styles/Margins.module.css'
import { buildBusinessSchema } from 'utils/json-ld-schemas'
import { SITE_URL } from 'utils/constants'
import WhoWeAre from '../organisms/home/WhoWeAre'

const HONEY_COMBS = [
  {
    image: {
      url: '/images/goalssh-400x400.png',
      alt: 'meet our attorneys',
    },
    position: 'left',
    content: {
      title: 'MEET OUR TEAM',
      description: `Our attorneys collaborate across the firm’s practice areas to achieve the best
      combination of knowledge, experience, and efficiency. We are dedicated to delivering
      outstanding client service.`,
      url: {
        label: 'Meet our attorneys',
        slug: '/attorneys',
      },
    },
  },
  {
    image: {
      url: '/images/colabsh2-400x400.png',
      alt: 'our legal services',
    },
    position: 'right',
    content: {
      title: 'OUR SERVICES',
      description: `We help our clients achieve their goals by providing tailored services with the
      focused experience of a boutique firm by drawing upon the resources of the firm’s
      core practice areas.`,
      url: {
        label: 'See what we do',
        slug: '/practices',
      },
    },
  },
]

export default function HomePage({ seo, posts, locations, leadership }) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`${SITE_URL}`}
        openGraph={{
          type: 'website',
          url: SITE_URL,
          title: 'Scarinci Hollenbeck',
          description: seo.metaDescription,
          images: [
            {
              url: `${SITE_URL}/images/no-image-found-diamond.png`,
              width: 300,
              height: 140,
              alt: 'Scarinci Hollenbeck',
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: SITE_URL,
          cardType: seo.metaDescription,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
      </Head>
      <HomeBanner />
      <Container>
        <MainTag />
        <HoneyComb content={HONEY_COMBS} />
        <WhoWeAre />
        <HomeOurLeadership attorneys={leadership} />
        <HomeReviews />
        <HomePageLink link="/awards" title="Award Methodology" />
        <HomeLocations locations={sortByKey(locations.offices, 'id')} />
        <div className={marginStyles.mt6}>
          <ArticleHero content={posts} />
        </div>
        <HomePageLink
          link="/library/category/firm-news"
          title="Read more articles about our attorneys"
          margins="my-5"
        />
      </Container>
    </>
  )
}
