import React, { memo } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyCard from 'components/attorney-card';
import AttorneyVirtualizedGrid from 'components/attorney-virtualized-grid';
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

const ArchiveAttorneyResultsNonFiltered = memo(({ attorneys }) => {
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
      {(managingPartners.length <= 15) ? <AttorneyCardContainer content={managingPartners} /> : <AttorneyVirtualizedGrid content={managingPartners} />}
      <AttorneySectionTitle title="Partners" />
      {(partners.length <= 15) ? <AttorneyCardContainer content={partners} /> : <AttorneyVirtualizedGrid content={partners} />}
      <AttorneySectionTitle title="Counsel" />
      {(counsel.length <= 15) ? <AttorneyCardContainer content={counsel} /> : <AttorneyVirtualizedGrid content={counsel} />}
      <AttorneySectionTitle title="Of Counsel & Counsel Emeritus" />
      {(ofCounsel.length <= 15) ? <AttorneyCardContainer content={ofCounsel} /> : <AttorneyVirtualizedGrid content={ofCounsel} />}
      <AttorneySectionTitle title="Senior Associates" />
      {(seniorAssociates.length <= 15) ? <AttorneyCardContainer content={seniorAssociates} /> : <AttorneyVirtualizedGrid content={seniorAssociates} />}
      <AttorneySectionTitle title="Associates" />
      {(associates.length <= 15) ? <AttorneyCardContainer content={associates} /> : <AttorneyVirtualizedGrid content={associates} />}
    </>
  );
});

export default ArchiveAttorneyResultsNonFiltered;
