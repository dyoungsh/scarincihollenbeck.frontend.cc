import BasicList from 'components/molecules/footer/BasicList'
import CorePracticesList from 'components/molecules/footer/CorePracticesList'
import LinkList from 'components/molecules/footer/LinkList'
import Container from 'layouts/Container'
import React from 'react'
import styled from 'styled-components'
import { FIRM_PAGES, LAW_PAY_URL, OFFICE_LOCATIONS, SOCIAL_MEDIA } from 'utils/constants'

const firmPages = FIRM_PAGES.sort((a, b) => (a.title > b.title ? 1 : -1))

const officeLocations = OFFICE_LOCATIONS.map((office) => ({
  id: office.id,
  title: office.label,
  slug: office.slug,
}))

const lawPay = [
  {
    id: 1,
    slug: LAW_PAY_URL,
    title: 'Make a payment',
  },
]

const contactInformation = [
  {
    id: 1,
    item: '<strong>Phone:</strong> 201-896-4100',
  },
  {
    id: 2,
    item: '<strong>Fax:</strong> 201-896-8660',
  },
  {
    id: 3,
    item: '<strong>Email:</strong>  info@sh-law.com',
  },
]

const FooterBody = () => {
  return (
    <Container>
      <BodyContainer>
        <LinkList title="Firm Pages" list={firmPages} useClient />
        <div>
          <LinkList title="Client Services" list={lawPay} useClient={false} />
          <LinkList title="Social Media" list={SOCIAL_MEDIA} useClient={false} />
        </div>
        <LinkList title="Office Locations" list={officeLocations} useClient />
        <BasicList title="Contact Information" list={contactInformation} />
        <CorePracticesList />
      </BodyContainer>
    </Container>
  )
}

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    padding: 0;
    justify-content: space-evenly;
  }
`

export default FooterBody
