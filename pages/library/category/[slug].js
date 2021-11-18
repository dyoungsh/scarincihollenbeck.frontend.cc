import LibraryPage from 'components/pages/library-page'
import SiteLoader from 'components/shared/site-loader'
import { useRouter } from 'next/router'
import { getLibraryContent } from 'pages/api/library-content'
import { BASE_API_URL, SITE_URL } from 'utils/constants'
import { capitalizeFirstLetterInWords } from 'utils/helpers'

export default function LibraryCategory({
  authors,
  childrenOfCurrentCategory,
  description,
  pageTitle,
  popularCategories,
  results,
  name,
  categoryId,
}) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    )
  }

  const splitDescription = description.split('.')
  const currentPageTitle = pageTitle.replace(/-/g, ' ')
  const canonicalUrl = `${SITE_URL}/library/${pageTitle}`
  const categoryName = capitalizeFirstLetterInWords(name)
  const archiveUrl = `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=${categoryId}`

  const libraryProps = {
    seo: {
      title: `${categoryName} Legal Articles`,
      metaDescription: splitDescription[0].replace('&amp;', '&'),
      canonicalUrl,
    },
    results,
    authors,
    popularCategories,
    childrenOfCurrentCategory,
    archiveUrl,
    currentPageTitle,
    categoryName,
    description,
  }

  return <LibraryPage {...libraryProps} />
}

export async function getServerSideProps({ params }) {
  const { slug } = params

  const request = await getLibraryContent(slug)

  if (request.status === 404) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      ...request.data,
    },
  }
}
