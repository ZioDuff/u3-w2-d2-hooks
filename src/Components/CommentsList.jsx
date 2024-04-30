import SingleComment from "./SIngleComment"
import { ListGroup } from "react-bootstrap"

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.element.map((obj) => {
        return (
          <SingleComment
            id={obj._id}
            key={obj._id}
            comment={obj.comment}
            rate={obj.rate}
          />
        )
      })}
    </ListGroup>
  )
}
export default CommentList
