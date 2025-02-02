import { Container, Row, Col } from 'react-bootstrap';
import AdminProfileHeader from 'components/organisms/admin/AdminHeader';
import PersonSiteHead from 'components/shared/head/PersonSiteHead';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import { createMarkup } from 'utils/helpers';

const AdminProfile = ({ response, profile, canonicalUrl }) => {
  const { seo } = response;

  return (
    <>
      <PersonSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={canonicalUrl}
        name={response.name}
        featuredImage={seo.featuredImg}
        designation={profile.designation}
      />
      <AdminProfileHeader profile={profile} image={response.image.url} />
      <Container>
        <Row>
          <Col sm={12}>
            <h4 className={grayTitleStyles.title}>Biography</h4>
            <div className="mb-5" dangerouslySetInnerHTML={createMarkup(response.biography)} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProfile;
