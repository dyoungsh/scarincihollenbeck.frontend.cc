import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import SingleSubHeader from 'layouts/SingleSubHeader';
import { SITE_PHONE } from 'utils/constants';

const ErrorPage = ({ title, subTitle, mainMessage }) => (
  <>
    <SingleSubHeader title={title} subtitle={subTitle} offset={2} span={7} />
    <Container>
      <Row>
        <Col sm={12} md={{ span: 7, offset: 2 }}>
          <Card className="p-3 mb-5 mt-2">
            <p className="lead mb-3">{mainMessage}</p>
          </Card>
        </Col>
        <Col sm={12} className="border-top border-bottom py-5">
          <p className="lead text-center">
            {' '}
            If you are a client, please get in touch with your
            {' '}
            <Link href="/attorneys">
              <a className="blue-title">
                <u>attorney</u>
              </a>
            </Link>
            {' '}
            contact directly.
          </p>
          <p className="lead text-center">
            If you are looking to get in touch with an attorney under the terms as to becoming a new
            client please call
            {' '}
            <strong>
              {SITE_PHONE}
              .
            </strong>
          </p>
        </Col>
        <Col sm={12} md={{ span: 7, offset: 2 }}>
          <Card className="p-3 mb-5 mt-5">
            <p className="h5">
              <strong>Or try visiting one of these pages on our site to narrow your search.</strong>
            </p>
            <ul style={{ marginLeft: '-1em' }}>
              <li>
                <Link href="/attorneys">
                  <a className="u-hover h5">Attorneys</a>
                </Link>
              </li>
              <li>
                <Link href="/practice">
                  <a className="u-hover h5">Practices</a>
                </Link>
              </li>
              <li>
                <Link href="/locations">
                  <a className="u-hover h5">Locations</a>
                </Link>
              </li>
              <li>
                <Link href="/library/category/firm-news">
                  <a className="u-hover h5">Firm News</a>
                </Link>
              </li>
              <li>
                <Link href="/library/category/firm-events">
                  <a className="u-hover h5">Firm Events</a>
                </Link>
              </li>
              <li>
                <Link href="/library/category/law-firm-insights">
                  <a className="u-hover h5">Firm Insights</a>
                </Link>
              </li>
            </ul>
          </Card>
        </Col>
        <style jsx>
          {`
            li {
              margin-bottom: 6px;
            }
          `}
        </style>
      </Row>
    </Container>
  </>
);

export default ErrorPage;
