import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Container from 'react-bootstrap/Container';
import HomeBanner from 'components/organisms/home/HomeBanner';
import HomeHoneyCombSection from 'components/organisms/home/HoneyCombSection';
import HomeMainTag from 'components/organisms/home/MainTag';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import styles from 'styles/Home.module.css';
import { CURRENT_DOMAIN } from 'utils/constants';
import { formatSrcToCloudinaryUrl } from 'utils/helpers';

const AllOfficeLocations = dynamic(() => import('components/organisms/home/AllOfficeLocations'));
const HomeOurLeadership = dynamic(() => import('components/organisms/home/OurLeadership'));
const Awards = dynamic(() => import('components/organisms/home/Awards'));
const AboutFirmSection = dynamic(() => import('components/organisms/home/AboutFirmSection'));
const HomePageLink = dynamic(() => import('components/organisms/home/PageLink'));
const FirmNews = dynamic(() => import('components/organisms/home/FirmNews'));

const HomePage = ({
  seo,
  aboutFirm,
  awards,
  banner,
  intro,
  leadership,
  offices,
  serviceOne,
  serviceTwo,
}) => (
  <>
    <HomeSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={CURRENT_DOMAIN} />
    <HomeBanner {...banner} />
    <Container>
      <HomeMainTag {...intro} />
      <HomeHoneyCombSection
        contentOne={(
          <Image
            src={formatSrcToCloudinaryUrl(serviceOne?.serviceImage?.sourceUrl)}
            alt={serviceOne?.title}
            width={400}
            height={400}
            layout="intrinsic"
          />
        )}
        contentTwo={(
          <div className={`${styles.honeyCombContent} float-right`}>
            <p className={styles.honeycombTitle}>
              <strong className="text-uppercase">{serviceOne?.title}</strong>
            </p>
            <p>{serviceOne?.description}</p>
            <Link href={serviceOne?.linkUrl}>
              <a>{serviceOne?.linkLabel}</a>
            </Link>
          </div>
        )}
      />
      <HomeHoneyCombSection
        contentOne={(
          <div className={styles.honeyCombContent}>
            <p className={styles.honeycombTitle}>
              <strong className="text-uppercase">{serviceTwo?.title}</strong>
            </p>
            <p>{serviceTwo?.description}</p>
            <Link href={serviceTwo?.linkUrl}>
              <a>{serviceTwo?.linkLabel}</a>
            </Link>
          </div>
        )}
        contentTwo={(
          <div className="float-right">
            <Image
              src={formatSrcToCloudinaryUrl(serviceTwo?.serviceImage?.sourceUrl)}
              alt={serviceTwo?.title}
              width={400}
              height={400}
              layout="intrinsic"
            />
          </div>
        )}
      />
      <AboutFirmSection {...aboutFirm} />
      <HomePageLink link={aboutFirm.linkUrl} title={aboutFirm.linkLabel} />
      <HomeOurLeadership leaders={leadership} />
      <Awards awards={awards} />
      <HomePageLink link="/awards" title="Award Methodology" />
      <AllOfficeLocations offices={offices} />
      <FirmNews />
    </Container>
  </>
);

export default HomePage;
