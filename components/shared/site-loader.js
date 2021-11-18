import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BarLoader from 'react-spinners/BarLoader'

export default function SiteLoader() {
  return (
    <Container>
      <Row className="justify-content-center align-self-center">
        <BarLoader color="#DB2220" />
      </Row>
    </Container>
  )
}
