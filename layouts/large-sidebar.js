import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function LargeSidebar({ body, sidebar }) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          {body}
        </Col>
        <Col sm={12} md={4}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  )
}
