import { Row, Col } from 'react-bootstrap';
import styles from 'styles/Honeycomb.module.css';

const HomeHoneyCombSection = ({ contentOne, contentTwo }) => (
  <Row className={styles.honeyCombContainer}>
    <Col sm={12} md={6}>
      {contentOne}
    </Col>
    <Col sm={12} md={6}>
      {contentTwo}
    </Col>
    <style jsx>
      {`
        div.row {
          margin-top: 10rem;
        }
        h3 {
          color: #db2220;
        }
      `}
    </style>
  </Row>
);

export default HomeHoneyCombSection;
