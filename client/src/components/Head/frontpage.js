import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const FrontPageHead = (props) => {
	const { seo } = props;
	return 	<Helmet>
		<title>{seo.title}</title>
		<meta name="description" content={seo.metaDescription}/>
		<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
		<link rel="canonical" href="https://scarincihollenbeck.com/" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={seo.title} />
		<meta property="og:description" content={seo.metaDescription} />
		<meta property="og:url" content="https://scarincihollenbeck.com/" />
		<meta property="og:site_name" content="Scarinci Hollenbeck" />
		<meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
		<meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
		<meta property="og:image:width" content="750" />
		<meta property="og:image:height" content="350" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:description" content={seo.metaDescription} />
		<meta name="twitter:title" content={seo.title} />
		<meta name="twitter:site" content="@S_H_Law" />
		<meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
		<meta name="twitter:creator" content="@S_H_Law" />
		<meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
		<meta name="google-site-verification" content="googlee1788c62f584220b" />
	</Helmet>
	};


FrontPageHead.propTypes = {
  seo: PropTypes.arrayOf(PropTypes.object),
};

FrontPageHead.defaultProps = {
  seo: [],
};

export default FrontPageHead;
