import React, { useState } from "react";
import { MdMail, MdError } from "react-icons/md";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  var config = {
    headers: { "Content-Type": "application/json" },
  };

  const inputValue = {
    email: state.email,
    password: "meld123",
  };
  console.log(inputValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://35.201.2.209:8000/login", inputValue, config)
      .then((response) => {
        localStorage.setItem("auth", JSON.stringify(response.data));
        history.push("/devices");
      });
    setState({
      email: "",
      password: "meld123",
    });
  };
  return (
    <div className="login_wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login_info">
          <MdMail className="MdMail" />
          <input
            type="text"
            name="email"
            value={state.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="login_info">
          <MdError className="MdError" />
          <input
            type="text"
            name="password"
            value="meld123"
            placeholder="Password"
            disabled
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
