import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Username connot be empty!";
  }

  return errors;
};

export default function CommentForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remark: "",
  //   rating: 5,
  // });
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remark: "",
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h1>Comment here!</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br />
        <br />
        <label htmlFor="remark">Remark</label>
        <textarea
          placeholder="add few remarks"
          value={formik.values.remark}
          onChange={formik.handleChange}
          id="remark"
          name="remark"
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          value={formik.values.rating}
          onChange={formik.handleChange}
          max={5}
          min={1}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
