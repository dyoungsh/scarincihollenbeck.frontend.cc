import ApolloWrapper from 'layouts/ApolloWrapper';
import CovidPage from 'components/pages/CovidPage';
import { SITE_URL, COVID_POSTS_ID } from 'utils/constants';
import { getCovid19BasedPages } from 'utils/queries';

/** Fetch page content and map it to page props */
export const getStaticProps = async () => {
  const [request] = await getCovid19BasedPages(
    'government-education-covid-19-response-team',
    COVID_POSTS_ID,
  );
  const { title, content, seo } = request;

  return {
    props: {
      title,
      content,
      seo,
    },
    revalidate: 86400,
  };
};

const GovernmentEducationCovidResponseTeam = ({ title, content, seo }) => {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = extractSubTitle !== null ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');
  const canonicalUrl = `${SITE_URL}/government-education-covid-19-response-team`;

  const covidProps = {
    title,
    seo,
    bodyContent,
    canonicalUrl,
    subTitle,
    contentId: COVID_POSTS_ID,
  };

  return (
    <ApolloWrapper>
      <CovidPage {...covidProps} />
    </ApolloWrapper>
  );
};

export default GovernmentEducationCovidResponseTeam;
