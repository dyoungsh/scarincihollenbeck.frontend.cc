import React, { memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VirtualizedAttorneyList from 'components/virtualized-attorney-list'
import AttorneyCard from 'components/attorney-card';
import textStyles from 'styles/Text.module.css';


function AttorneySectionTitle({ title }) {
  return (
    <Row>
      <Col sm={12} className="my-4">
        <h3
          className={`${textStyles.redTitle} text-uppercase border-bottom mb-0`}
        >
          <strong>{title}</strong>
        </h3>
      </Col>
    </Row>
  )
}

function AttorneyCardContainer({ content }) {
  return ( 
    <Row>   
      {content.map((m) => (
        <Col key={m.link} sm={12} md={6} lg={4} className="mb-3">
          <AttorneyCard
            link={`/attorney${m.link}`}
            image={m.better_featured_image}
            name={m.title}
            title={m.designation}
            number={m.phone}
            email={m.email}
            width={80}
            height={112}
          />
        </Col>
      ))}
    </Row>
  )
};

export default function ArchiveAttorneyResultsNonFiltered({ attorneys }) {
  /// managing partners
  const managingPartners = attorneys.filter(
    (a) => a.designation === 'Managing Partner',
  );

  // partners & nyc managing partner
  const partners = attorneys.filter(
    (a) => a.designation === 'Partner'
      || a.designation === 'NYC Managing Partner'
      || a.designation === 'Washington, D.C. Managing Partner'
      || a.designation === 'Red Bank, NJ Managing Partner',
  );

  // counsel
  const counsel = attorneys.filter((a) => a.designation === 'Counsel');

  // of counsel & counsel emeritus
  const ofCounsel = attorneys.filter(
    (a) => a.designation.indexOf('Of Counsel') > -1,
  );

  // senior associates
  const seniorAssociates = attorneys.filter(
    (a) => a.designation === 'Senior Associate',
  );

  // associates
  const associates = attorneys.filter((a) => a.designation === 'Associate');

  return (
    <>
      <AttorneySectionTitle title="Managing Partners" />
      <AttorneyCardContainer content={managingPartners} /> 
      <AttorneySectionTitle title="Partners" />
      <AttorneyCardContainer content={partners} />
      <AttorneySectionTitle title="Counsel" />
      <AttorneyCardContainer content={counsel} /> 
      <AttorneySectionTitle title="Of Counsel & Counsel Emeritus" />
      <AttorneyCardContainer content={ofCounsel} />
      <AttorneySectionTitle title="Senior Associates" />
      <AttorneyCardContainer content={seniorAssociates} /> 
      <AttorneySectionTitle title="Associates" />
      <AttorneyCardContainer content={associates} />
    </>
  );
};