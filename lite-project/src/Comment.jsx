import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comment, setComment] = useState([
    {
      username: "@vg",
      Remark: "Learning mern",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComment((currCommet) => [...currCommet, comment]);
  };

  return (
    <>
      <div>
        <h4>All Comments !</h4>
        {comment.map((comment, idx) => (
          <div className="comments" key={idx}>
            <span>{comment.Remark}</span>
            &nbsp;
            <span>(Rating = {comment.rating})</span>
            <p>- {comment.username} </p>
          </div>
        ))}
      </div>
      <hr />
      <CommentForm addNewComment={addNewComment} />
    </>
  );
}
