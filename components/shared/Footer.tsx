// import Link from 'next/link';
// import Image from 'next/image';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import CookieConsentContainer from 'components/shared/cookie-consent';
// import styles from 'styles/Footer.module.css';
// import textStyles from 'styles/Text.module.css';
// import {
//   FIRM_PAGES, SITE_FOOTER_NAVIGATION, OFFICE_LOCATIONS, LAW_PAY_URL,
// } from 'utils/constants';

import BottomTag from 'components/organisms/footer/BottomTag'
import FooterBody from 'components/organisms/footer/FooterBody'
import TopMenu from 'components/organisms/footer/TopMenu'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer className="no-print">
      <TopMenu />
      <FooterBody />
      <BottomTag />
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.gray};
`

export default Footer
