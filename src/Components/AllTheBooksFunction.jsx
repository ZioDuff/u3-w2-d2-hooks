import {
  Badge,
  Card,
  Col,
  Container,
  Row,
  ButtonGroup,
  Button,
} from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
import horror from "../Data/horror.json"
import scifi from "../Data/scifi.json"
import romance from "../Data/romance.json"
import history from "../Data/history.json"
import { Component } from "react"

// proviamo a fare un refactor
class AllTheBooksFunction extends Component {
  state = {
    selectedJson: fantasy,
  }
  render() {
    const searcheBook = this.state.selectedJson.filter((book) => {
      return book.title
    })
    console.log(searcheBook)
    return (
      <Container className="my-3" as={"main"}>
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup aria-label="Basic example" className="my-3">
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: fantasy })
              }}
            >
              Fantasy
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: history })
              }}
            >
              History
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: horror })
              }}
            >
              Horror
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: romance })
              }}
            >
              Romance
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: scifi })
              }}
            >
              Scifi
            </Button>
          </ButtonGroup>
        </div>
        <Row xs={1} sm={2} md={3} lg={4}>
          {searcheBook.slice(0, 6).map((books) => {
            return (
              <Col className="mb-2" key={books.asin}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    className="cards-image"
                    src={books.img}
                    alt={books.title}
                  />
                  <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                    <Card.Title>{books.title}</Card.Title>
                    <Card.Text className="mb-auto">{books.category}</Card.Text>
                    <Card.Text>
                      <Badge bg="info">{books.price}$</Badge>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
export default AllTheBooksFunction
