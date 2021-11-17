import HomePage from 'components/pages/home-page'
import { BASE_API_URL } from 'utils/constants'
import { headers, formatDate, setTextLen } from 'utils/helpers'
import { SEO, Office, Leadership, FeaturedArticle, ArticleList } from 'types/Home'

const santizeMember = (list: any, designation: string, title: string) => {
  return list
    .filter((a) => a.acf.designation === designation)
    .map((ds) => ({
      name: ds.title.rendered.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
      slug: ds.link.replace('https://wp.scarincihollenbeck.com', ''),
      image: ds.better_featured_image.source_url,
      title: [title],
      lastName: ds.acf.last_name,
    }))
}

interface Props {
  seo: SEO
  locations: Office[]
  leadership: Leadership[]
  featuredPost: FeaturedArticle
  articleList: ArticleList[]
}

const Home: React.FC<Props> = ({
  seo,
  locations,
  leadership,
  featuredPost,
  articleList,
}: Props) => {
  const homePageProps = {
    seo,
    locations,
    leadership,
    featuredPost,
    articleList,
  }

  return <HomePage {...homePageProps} />
}

const getHomePageContent = async () => {
  const [seo, news, events, locations, attorneys, administration] = await Promise.all([
    fetch(`${BASE_API_URL}/wp-json/front-page/meta`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=98&_embed`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/posts?categories=99&_embed`, { headers }).then((data) =>
      data.json()
    ),
    fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/attorneys?per_page=100`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
    fetch(`${BASE_API_URL}/wp-json/wp/v2/administration?per_page=10`, { headers })
      .then((data) => data.json())
      .catch((err) => err),
  ])

  const posts = [...news, ...events]

  return [seo, posts, locations, attorneys, administration]
}

export async function getStaticProps() {
  const [seo, posts, locations, attorneys, administration] = await getHomePageContent()
  const firmLeadership = attorneys
    .filter((a) => a.acf.chair.length > 0)
    .filter((a) => a.acf.last_name !== 'Pepe')
    .filter((a) => a.acf.last_name !== 'Eynon')
    .map((leader) => ({
      name: leader.title.rendered,
      slug: leader.link.replace('https://wp.scarincihollenbeck.com', ''),
      lastName: leader.acf.last_name,
      image: leader.better_featured_image.source_url,
      title: leader.acf.chair
        .map((chair) => chair.post_title)
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1
          }

          return -1
        }),
    }))
    .sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1
      }

      return -1
    })

  const donaldScarinci = santizeMember(attorneys, 'Managing Partner', 'Firm Managing Partner')
  const donPepe = santizeMember(
    attorneys,
    'Red Bank, NJ Managing Partner',
    'Red Bank, NJ Office Managing Partner'
  )
  const howardBader = santizeMember(
    attorneys,
    'NYC Managing Partner',
    'NYC Office Managing Partner'
  )
  const teddyEnynon = santizeMember(
    attorneys,
    'Washington, D.C. Managing Partner',
    'Washington, D.C. Office Managing Partner'
  )
  const katerinTraugh = santizeMember(administration, 'Executive Director', 'Executive Director')

  const formattedLocations = locations.offices.map((location) => ({
    id: location.id,
    slug: location.slug,
    featuredImg: location.featuredImg,
    title: location.title,
  }))

  const featuredPost = {
    slug: posts[0].link.replace('https://scarincihollenbeck.com', ''),
    image: posts[0].better_featured_image.source_url.replace('Feature', 'Body'),
    title: posts[0].title.rendered,
    date: formatDate(posts[0].date),
    authors: posts[0]._embedded.author.map(({ name, link }) => ({
      name,
      link,
    })),
    excerpt: setTextLen(posts[0].excerpt.rendered, 220),
  }

  const articleList = posts.splice(0, 4).map((article) => ({
    id: article.id,
    slug: article.link.replace('https://scarincihollenbeck.com', ''),
    image: article.better_featured_image.source_url,
    title: article.title.rendered,
    description: setTextLen(article.excerpt.rendered.replace('<p>', '').replace('</p>', ''), 130),
  }))

  return {
    props: {
      seo,
      locations: formattedLocations,
      featuredPost,
      articleList,
      leadership: [
        ...katerinTraugh,
        ...donaldScarinci,
        ...donPepe,
        ...howardBader,
        ...teddyEnynon,
        ...firmLeadership,
      ],
    },
    revalidate: 1,
  }
}

export default Home
