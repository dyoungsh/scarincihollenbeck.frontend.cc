import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { SITE_URL } from 'utils/constants';
import { getPageContent } from 'utils/queries';
import HolidayPage from 'components/pages/HolidayPage';
import { fetchAPI } from 'utils/api';
import { basicPagesQuery } from 'utils/graphql-queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch page data from WP GRAPHQL API */
const getBasicPageContent = async (slug) => {
  const data = await fetchAPI(basicPagesQuery, {
    variables: { slug },
  });
  return data?.pageBy;
};

/** Set holiday page data to props */
export const getServerSideProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const request = await getBasicPageContent(slug);

  if (!request) {
    return {
      notFound: true,
    };
  }

  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
      slug: params.slug,
    },
  };
};

/** firm holiday page component */
const FirmHoliday = ({
  title, content, seo, slug,
}) => {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  let extractSubTitle = '';
  let subTitle = '';
  let bodyContent = '';

  if (content) {
    extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
    subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
    bodyContent = content.replace(subTitle, '');
  }

  const canonicalUrl = `${SITE_URL}/holiday/${slug}`;

  const holidayPageProps = {
    canonicalUrl,
    title,
    subTitle,
    bodyContent,
    seo,
  };

  return <HolidayPage {...holidayPageProps} />;
};

export default FirmHoliday;
