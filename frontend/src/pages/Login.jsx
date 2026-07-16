import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        loginData
      );

      console.log(response.data);

      // Save JWT Token
      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "100px auto",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}