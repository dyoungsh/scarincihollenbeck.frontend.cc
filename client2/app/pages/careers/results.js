import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { urlify } from '../../../utils/helpers';

function Results(props) {
  const { positions } = props;

  return (
    <div className="w-100 border mt-0">
      <Container className="mt-2">
        <Row>         
          {positions.length < 1) && (
            <div className="w-100 my-5">
              <h3 className="text-center red-title">Sorry, no career position available...</h3>
            </div>
          )}
          {positions.map((p) => (
            <div key={p.title} className="col-sm-12 col-md-4 mt-3 mb-2">
              <Link href="/career/[slug]" as={`/career/${urlify(p.title)}`}>
                <div className="card d-flex flex-row">
                  <div id="bg-red-block" />
                  <div className="my-2">
                    <h5 className="mb-0">{p.title}</h5>
                    <p className="my-0">
                      <strong>Location: </strong>
                      {p.positionLocation}
                    </p>
                    <p className="my-0">
                      <strong>Type: </strong>
                      {p.positionType}
                    </p>
                    <p className="my-0">
                      <strong>Start: </strong>
                      {p.startDate}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}