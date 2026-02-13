// function handleFormSubmit(event) {
//   event.preventDefault();
//   console.log("Form was submitted");
// }

import { use, useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState(" ");
  // let [username, setUsername] = useState(" ");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);
  // };

  // let handleUsername = (event) => {
  //   console.log(event.target.value);
  //   setFullName(event.target.value);

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">FullName</label>
      <input
        type="text"
        placeholder="Enter full name."
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="Username."
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br />
      <br />
      <label htmlFor="password">password</label>
      <input
        type="text"
        placeholder="Enter password."
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
