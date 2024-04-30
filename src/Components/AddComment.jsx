import { useState } from "react"
import { FloatingLabel, Form } from "react-bootstrap"
// *andiamo a cambiare il nostro componetne a classe in funzione
const AddComment = (props) => {
  //todo state = {
  //todo   commentUser: {
  //todo     comment: "",
  //todo     rate: "",
  //todo     elementId: this.props.asin,
  //todo   },
  //todo }
  // !da cambiare in hooks

  const [commentUser, setCommentUser] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    postComment()
  }
  const handleFieldChange = (propName, propValue) => {
    setCommentUser({
      ...commentUser,
      [propName]: propValue,
    })
  }
  const postComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentUser),
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
      },
    })
      .then((response) => {
        if (response.ok) {
          setCommentUser({
            comment: "",
            rate: "",
            elementId: props.asin,
          })
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .catch((err) => {
        console.log(err)
        // console.log(this.props.asin)
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Lascia una Commento"
        className="my-3"
      >
        <Form.Control
          type="text"
          placeholder="..."
          value={commentUser.comment}
          onChange={(e) => handleFieldChange("comment", e.target.value)}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Lascia una valutazione">
        <Form.Select
          aria-label="Floating label select example"
          value={commentUser.rate}
          onChange={(e) => handleFieldChange("rate", e.target.value)}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        <button type="submit">invia</button>
      </FloatingLabel>
    </Form>
  )
}
export default AddComment
