import { CURRENT_DOMAIN, SITE_TITLE, SITE_EMAIL } from 'utils/constants';

const siteDescription = `${SITE_TITLE} is an alternative to a National 250 law firm. With offices in New Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.`;

export const articleSchema = (body) => ({
  '@graph': [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'LegalService',
        name: SITE_TITLE,
        description: siteDescription,
        url: CURRENT_DOMAIN,
        image: `${CURRENT_DOMAIN}/images/no-image-found-diamond-750x350.png`,
        priceRange: '$$$$',
        telephone: '201-896-4100',
        email: SITE_EMAIL,
        hasMap:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1668721445153!2d-74.11046358459224!3d40.80232667932217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c256174fd409ef%3A0xe46c0af03865c18!2s1100+Valley+Brook+Ave%2C+Lyndhurst%2C+NJ+07071!5e0!3m2!1sen!2sus!4v1537300224657',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lyndhurst',
          addressRegion: 'NJ',
          postalCode: '07071',
          streetAddress: '1100 Valley Brook Ave., P.O. Box 790',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '40.802280',
          longitude: '-74.108350',
        },
        sameAs: [
          'https://www.facebook.com/ScarinciHollenbeck/',
          'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
          'https://twitter.com/s_h_law',
        ],
        openingHours: 'Mo,Tu,We,Th,Fr, 8:300-6:00',
      },
      ...body,
    },
  ],
});
export const buildBusinessSchema = () => ({
  '@graph': [
    {
      '@context': 'http://schema.org',
      '@type': 'LegalService',
      name: SITE_TITLE,
      description: siteDescription,
      url: CURRENT_DOMAIN,
      image: `${CURRENT_DOMAIN}/images/no-image-found-diamond-750x350.png`,
      priceRange: '$$$$',
      telephone: '201-896-4100',
      email: SITE_EMAIL,
      hasMap:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1668721445153!2d-74.11046358459224!3d40.80232667932217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c256174fd409ef%3A0xe46c0af03865c18!2s1100+Valley+Brook+Ave%2C+Lyndhurst%2C+NJ+07071!5e0!3m2!1sen!2sus!4v1537300224657',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lyndhurst',
        addressRegion: 'NJ',
        postalCode: '07071',
        streetAddress: '1100 Valley Brook Ave., P.O. Box 790',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '40.802280',
        longitude: '-74.108350',
      },
      sameAs: [
        'https://www.facebook.com/ScarinciHollenbeck/',
        'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
        'https://twitter.com/s_h_law',
      ],
      openingHours: 'Mo,Tu,We,Th,Fr, 8:300-6:00',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://scarincihollenbeck.com/#website',
      url: 'https://scarincihollenbeck.com/',
      name: SITE_TITLE,
      description: siteDescription,
      publisher: {
        '@id': `${CURRENT_DOMAIN}/#organization`,
      },
      inLanguage: 'en-US',
    },
  ],
});

export const buildLocationSchema = (location) => ({
  '@context': 'http://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_TITLE,
  url: CURRENT_DOMAIN,
  logo: '/images/no-image-found-diamond.png',
  image: location.image,
  address: {
    '@type': 'PostalAddress',
    streetAddress: location.streetAddress,
    addressLocality: location.addressLocality,
    addressRegion: location.addressRegion,
    postalCode: location.postalCode,
    addressCountry: location.addressCountry,
    telephone: location.telephone,
  },
  openingHours: ['Mo-Fr 08:00-18:00'],
  hasmap: location.mapLink,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: location.latitude,
    longitude: location.longitude,
  },
  priceRange: '$$$$',
  sameAs: [
    'https://www.facebook.com/ScarinciHollenbeck/',
    'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
    'https://twitter.com/s_h_law',
  ],
});

export const buildAttorneyProfileSchema = (name, url, imageUrl, socialMediaLinks, jobTitle) => {
  let links;

  if (socialMediaLinks) {
    links = socialMediaLinks.map((link) => link.url);

    if (socialMediaLinks.length === 0) {
      links = [
        'https://www.facebook.com/ScarinciHollenbeck/',
        'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
      ];
    }
  }

  return {
    '@graph': [
      {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name,
        url,
        image: imageUrl,
        sameAs: links,
        jobTitle,
        worksFor: {
          '@type': 'Organization',
          name: SITE_TITLE,
        },
      },
    ],
  };
};

export const STANDARD_SCHEMA = `{"@context":"https://schema.org/","@type":"WebSite","name":"${SITE_TITLE}","url":"${CURRENT_DOMAIN}","potentialAction":{"@type":"SearchAction","target":"{search_term_string}","query-input":"required name=search_term_string"}}`;
