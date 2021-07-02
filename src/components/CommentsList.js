import React from "react"

const CommentsList = ({user,comments }) => {
  const CommentsArray = comments.map(commentName => {
    return (
      <div>
    <li>{commentName.comment}</li>
    <li>{commentName.user}</li>
    </div>
  )})
  return (
    <ul>{CommentsArray}</ul>
  )
}
export default CommentsList