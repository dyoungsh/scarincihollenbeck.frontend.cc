import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import SingleCareerBreadCrumbs from 'components/singlecareer/breadcrumbs';
import SingleCareerBody from 'components/singlecareer/body';
import SingleCareerSidebar from 'components/singlecareer/sidebar';
import { headers } from 'utils/helpers';

export default function CareersPost({ career }) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <>
      <NextSeo
        title={career.seo.title}
        description={career.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com${career.uri}`}
      />
      <SingleSubHeader
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title={career.title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
      />
      <LargeSidebar
        body={(
          <>
            <SingleCareerBreadCrumbs title={career.title} />
            <SingleCareerBody
              title={career.title}
              position={career.positionDescription}
              contact={career.contact}
            />
          </>
        )}
        sidebar={<SingleCareerSidebar />}
      />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/career-portal/careers',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.careers.map((c) => `/careers${c.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [careerJson] = await Promise.all([
    fetch(`https://wp.scarincihollenbeck.com/wp-json/individual-career/career/${params.slug}`, { headers }).then((data) => data.json()),
  ]);

  if (careerJson.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career: careerJson,
    },
    revalidate: 1,
  };
}
