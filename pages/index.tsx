import HomePage from 'components/pages/home-page'
import { BASE_API_URL } from 'utils/constants'
import { headers } from 'utils/helpers'

const santizeMember = (list: any, designation: string, title: string) => {
  return list
    .filter((a) => a.acf.designation === designation)
    .map((ds) => ({
      name: ds.title.rendered.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: [title],
    }))
}

interface Props {
  seo: {
    title: string
    metaDescription: string
    canonicalLink: string
  }
}
const Home = ({ seo, posts, locations, leadership }) => {
  const homePageProps = {
    seo,
    posts,
    locations,
    leadership,
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
      link: leader.link,
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

  return {
    props: {
      seo,
      posts: posts.splice(0, 5),
      locations,
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
