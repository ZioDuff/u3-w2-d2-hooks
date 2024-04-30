import { Col, Container, Row } from "react-bootstrap"

const MyFooter = () => {
  return (
    <footer className="bg-info pt-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div>
              <h4 className="d-flex justify-content-center">
                Puoi trovare EPICBOOKS anche su{" "}
              </h4>
              <ul className="list-icon">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default MyFooter
