import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
import horror from "../Data/horror.json"
import scifi from "../Data/scifi.json"
import history from "../Data/history.json"
import romance from "../Data/romance.json"
import SingleBook from "./SingleBook"
import { useState } from "react"
import CommentArea from "./CommentArea"

//refactor della funzione in classe
// * oggi andremo a fare un refactor del nostro progetto cambiando tutti i componenti a classe in funzioni ed utlizzando gli hooks
// ? come fare?, dovremo innanzitutto cambiare il nostro componente a classe in funzione, e poi cambiare lo state principale in piu hooks

const BookList = (props) => {
  const [selectedJson, setSelectedJson] = useState(fantasy)
  const [searchValue, setSearchValue] = useState("")

  const [selectedBook, setSelectedBook] = useState(null)

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin)
  }
  //! const [selected, setSelected] = useState(false)
  //tramite questa costante andiamo a dichiarare un nuovo array che sara filtrato e ritornera il singolo libro tramite il suo titolo
  const filteredBooks = selectedJson.filter((book) => {
    return book.title.toLocaleLowerCase().includes(searchValue.toLowerCase())
    //in questo caso andranno filtrati i titoli dei libri e verrnao messi a confronto con il valore del nostro input
    // per poter aver un efficacia migliore i nostri valori andranno confrontati tutti in "lower case"
  })
  return (
    <Container>
      <Form.Label htmlFor="inputPassword5">
        <h4>Cerca il tuo libro</h4>
      </Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        className="mb-3"
        //qui e dove andiamo a leggere il cambiamento del valore di "searchvalue" traminete l'evento il target dell evento che si aspetta questo metodo
        // anche qua tramite il "setState" andramo a cambaire poi quel valore
        onChange={(e) => setSearchValue(e.target.value)}
        // qui invece leggiamo il valore del nostro input ossiamo il testo
        value={searchValue}
      />
      {/* <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}
      <div className="d-flex justify-content-between align-items-center">
        <ButtonGroup aria-label="Basic example" className="my-3">
          <Button
            variant="outline-secondary"
            //tramite questo metodo andiamo a dire che al click del determinato "button"
            //l'array selezionato nello stato deve cambiare
            //questo puo accadera solo se ambiamo importato tutti gli array che ci servono
            onClick={(e) => {
              setSelectedJson(fantasy)
            }}
          >
            Fantasy
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              setSelectedJson(history)
            }}
          >
            History
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              setSelectedJson(horror)
            }}
          >
            Horror
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              setSelectedJson(romance)
            }}
          >
            Romance
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              setSelectedJson(scifi)
            }}
          >
            Scifi
          </Button>
        </ButtonGroup>
      </div>
      {/* questo è l'equivalente delle row-cols  */}
      <Row>
        <Col md={8}>
          <Row className="g-2 mt-3">
            {filteredBooks.map((book) => {
              return (
                // la key viene sempre messa sul primo figlio del map
                <Col xs={12} md={4} key={book.asin} className="mb-2">
                  {/* singleBook viene importato da un altro componente ma non è nient'altro che la struttura della card dove i valori vengono passati tramite props */}
                  <SingleBook
                    asin={book.asin}
                    img={book.img}
                    title={book.title}
                    category={book.category}
                    price={book.price}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  )
}
export default BookList
