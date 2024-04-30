import AddComment from "./AddComment"
import CommentList from "./CommentsList"
const { useState, useEffect } = require("react")

const CommentArea = (props) => {
  const [element, setElement] = useState([])

  const getFetchComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        "Content-type": "application-json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJmOWEzYTI4MzJlODAwMTk4NzMwYWMiLCJpYXQiOjE3MTQzOTU3MDYsImV4cCI6MTcxNTYwNTMwNn0.0NEnVpCWBS-BPhBaDC4yTcnB6P-RHpTsPYVEKUOBDVo",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella fetch")
        }
      })
      .then((elementArr) => {
        setElement(elementArr)
        // console.log(element)
      })
      .catch((error) => console.log(error))
  }
  //todo componentDidMount() {
  //todo   this.getFetchComments()
  //todo }
  //! da cambiare con "useEffect"

  useEffect(() => {
    getFetchComments()
  }, [props.asin])
  return (
    <>
      <CommentList element={element} />
      <AddComment asin={props.asin} />
    </>
  )
}
export default CommentArea
