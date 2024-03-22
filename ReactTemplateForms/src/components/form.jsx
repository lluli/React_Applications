import React, { useState } from "react";

const Form = () => {
  const [username, setuserName] = useState("");
  const [userpassword, setuserPassword] = useState("");
  const [userphoneNumber, setuserphoneNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setuserName(value);
    }
    if (name === "userpassword") {
      setuserPassword(value);
    }
    if (name === "userphoneNumber" && typeof value === "number") {
      setuserphoneNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://echo.zuplo.io/", {
      method: "POST",
      body: JSON.stringify({ username, userpassword }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your username:
        <input
          type="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br /> <br />
      <label>
        Enter your password:
        <input
          type="password"
          name="userpassword"
          value={userpassword}
          onChange={handleChange}
        />
        <br /> <br />
      </label>
      <br />
      <label>
        Submit
        <input type="submit" name="submit" />
      </label>
    </form>
  );
};

export default Form;
