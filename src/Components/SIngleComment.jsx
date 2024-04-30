import { Badge, ListGroupItem } from "react-bootstrap"

const SingleComment = (props) => {
  const deleteFetchComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("eliminato")
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <ListGroupItem>
        {props.comment}
        {props.rate}

        <Badge onClick={deleteFetchComment}>elimina</Badge>
      </ListGroupItem>
    </>
  )
}
export default SingleComment
