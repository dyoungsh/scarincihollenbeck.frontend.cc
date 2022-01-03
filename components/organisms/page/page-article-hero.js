/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function ArticleHeroPage({ link, content }) {
  return (
    <Container>
      <Row className="my-4">
        {content
          .filter((_, i) => i <= 2)
          .map((article) => (
            <Col sm={12} md={4} key={article.title} className="my-3">
              <Link href={article.link}>
                <a className="text-center mx-auto d-block">
                  <Image
                    alt={article.title}
                    src={article.featuredImg || '/images/no-image-found-diamond.png'}
                    width={300}
                    height={150}
                    className="rounded"
                  />
                  <small className="text-dark d-block">
                    <strong>{article.title}</strong>
                  </small>
                </a>
              </Link>
            </Col>
          ))}
        {content.length >= 3 && (
          <a
            href={`/library?term=${link}`}
            className=" mx-auto d-block w-100 text-center my-4"
            style={{ color: '#db2220', fontSize: '1.275rem' }}
          >
            <strong>
              <u>More articles</u>
            </strong>
          </a>
        )}
      </Row>
    </Container>
  );
}
