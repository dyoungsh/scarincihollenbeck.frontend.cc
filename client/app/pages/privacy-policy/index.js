import Head from 'next/head';
import { withRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../components/footer';
import Body from '../../components/pages/body';
import Sidebar from '../../components/pages/sidebar';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import AttorneyCard from '../../components/attorney-card';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG } from '../../utils/next-gen-images';


export default function PrivacyPolicy({
  slides, title, content, posts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        title={title}
        subtitle={subTitle}
        image={blogHeaderJPG}
        height="auto"
      />
      <LargeSidebar
        body={(
          <Body
            content={bodyContent}
          />
          )}
        sidebar={(
          <Sidebar
            posts={posts}
          />
          )}
      />
      <Footer slides={slides} />
    </>
  );
}

export async function getStaticProps() {
  const [aJson, postJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/privacy-policy`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);
  const { posts } = postJson;
  const { title, content, seo } = aJson;

  return {
    props: {
      slides,
      title,
      content,
      posts,
      seo,
    },
  };
}
