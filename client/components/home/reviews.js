import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lineStyles from 'styles/LineHeader.module.css';

function Accolade({
  image, title, width, height, styleName,
}) {
  return (
    <Col
      sm={12}
      md={3}
      className={
        title === 'Lawyers.com'
          ? 'mt-6 mx-auto'
          : title === 'Martindale Hubbell'
            ? 'mx-6'
            : 'mt-5 mx-auto'
      }
    >
      <Image
        src={image}
        alt={title}
        width={width}
        height={height}
        layout="intrinsic"
        className={styleName}
      />
    </Col>
  );
}
export default function HomeReviews() {
  const accolades = [
    {
      image: '/images/reviews/superlawyerslogo.png',
      title: 'Super Lawyers',
      height: 164,
      width: 195,
      rating: null,
      styleName: 'superlawyers-icon',
    },
    {
      image: '/images/reviews/lawyerscom-logo.jpg',
      title: 'Lawyers.com',
      width: 300,
      height: 63,
      rating: 4.6,
      styleName: 'lawyerscom-icon',
    },
    {
      image: '/images/reviews/martindale-hubbell.jpg',
      title: 'Martindale Hubbell',
      width: 150,
      height: 103,
      rating: 5,
      styleName: 'martindale-hubbell-icon',
    },
    {
      image: '/images/reviews/yelp-logo.jpg',
      title: 'Yelp',
      width: 200,
      height: 100,
      rating: 5,
      styleName: 'yelp-icon',
    },
  ];
  return (
    <Row className="mt-5 px-2">
      <Col sm={12} className="mt-5 mb-0 pb-0">
        <div className={lineStyles.lineHeader}>
          <h3>Reviews & Accolades</h3>
        </div>
      </Col>
      {accolades.map((accolade) => (
        <Accolade
          key={accolade.title}
          image={accolade.image}
          title={accolade.title}
          width={accolade.width}
          height={accolade.height}
          rating={accolade.rating}
          styleName={accolade.styleName}
        />
      ))}
    </Row>
  );
}
