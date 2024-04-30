import { useState } from "react"
import Badge from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

//abbiamo fatto un refactor della funzione Singlebook in una classe
//passando sempre come props i valori della card
// * anche qua andremo ad effetuare un refactor del nostro componente a classe come abbiamo fatto precedentemente in booklist
const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  // * tutti quello che veniva richiamato tramite il "this" viene sostituito dalle props essendo in un componente a funzione
  //qui inzia l'esercizo extra che consiste nell'applicare una classe alla card all click di essa
  //bisognera farlo tramite la lettura del suo stato
  //il suo stato partira con valore false , una volta cambiato questo stato la card prendera la classe
  //todo state = {
  //todo   selected: false,
  //todo }
  // !andiamo a cambiare lo state in hooks

  return (
    <Card
      className="h-100"
      onClick={() => changeSelectedBook(book.asin)}
      //qui adottiamo un ternario in  modo da poter verificare lo stato subito dopo al click della card
      // se la card avra lo state selected true ricevera una classe altrimenti no
      style={{
        border: selectedBook === book.asin ? "3px solid red" : "",
      }}
      // tramite il metodo onclick possiamo generare una funzione che andra a cambaire il valore dello stato
      //tramite il setState possiamo leggere il valore dello stato e in caso cambiarlo
      //potevamo usare il valore "true" per poter cambiare lo stato ma facendo cosi lo stete non poteva tornare mai false in caso di un click successivo
      //utilizzando "!" gli diciamo al click di cambiare ogni volta lo stato alternando quindi tra "true" e "false"
    >
      <Card.Img variant="top" src={book.img} className="cards-image" />
      <Card.Body className="d-flex flex-column justify-content-between align-items-start">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="mb-auto">{book.category}</Card.Text>
        <Badge variant="info">
          <strong>{book.price}$</strong>
        </Badge>
        {/* 1)Aggiungi un componente CommentArea alla fine di SingleBook. Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire (suggerimento: short-circuit operator!). */}
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  )
}
export default SingleBook
