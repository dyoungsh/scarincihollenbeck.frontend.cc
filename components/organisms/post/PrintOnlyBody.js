import { Container, Row } from 'react-bootstrap';

const PrintOnlyBody = ({
  title, featuredImage, authors, content,
}) => (
  <span className="d-none d-print-block">
    <Container>
      <Row sm={10}>
        <h3 className="mt-5">
          <strong>{title}</strong>
        </h3>
        <div className="d-block w-100">
          <img className="mt-2 mb-4" src={featuredImage} alt={title} />
        </div>
        <div className="d-block w-100 mb-3">
          <strong>Author: </strong>
          {authors.length > 0
            ? authors.map((a, i) => (i === 0 && authors.length > 1 ? (
              <span key={a.display_name} className="text-dark">
                {a.display_name}
                ,
                {' '}
              </span>
            ) : (
              <span key={a.display_name} className="text-dark">
                {a.display_name}
              </span>
            )))
            : null}
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Row>
    </Container>
  </span>
);

export default PrintOnlyBody;
