import Head from 'next/head'
import { NextSeo } from 'next-seo'
import Container from 'layouts/Container'
import HomeBanner from 'components/organisms/home/HomeBanner'
import HoneyComb from 'components/organisms/home/HoneyComb'
import MainTag from 'components/organisms/home/MainTag'
import WhoWeAre from 'components/organisms/home/WhoWeAre'
import FirmLeadership from 'components/organisms/home/FirmLeadership'
import Awards from 'components/organisms/home/Awards'
import ArticleHero from 'components/organisms/home/ArticleHero'
import { sortByKey } from 'utils/helpers'
import { buildBusinessSchema } from 'utils/json-ld-schemas'
import { SITE_URL } from 'utils/constants'
import { SEO, Office, Leadership, FeaturedArticle, ArticleList } from 'types/Home'
import OfficeLocations from '../organisms/home/OfficeLocations'

interface Props {
  seo: SEO
  locations: Office[]
  leadership: Leadership[]
  featuredPost: FeaturedArticle
  articleList: ArticleList[]
}

const HomePage: React.FC<Props> = ({
  seo,
  locations,
  leadership,
  featuredPost,
  articleList,
}: Props) => {
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
        <HoneyComb />
        <WhoWeAre />
        <FirmLeadership leadership={leadership} />
        <Awards />
        <OfficeLocations locations={sortByKey(locations, 'id')} />
        <ArticleHero featuredPost={featuredPost} articleList={articleList} />
      </Container>
    </>
  )
}

export default HomePage
