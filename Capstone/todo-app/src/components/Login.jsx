import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        alert("Incorrect email or password!")
        throw new Error(text || "Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);

      // Redirect after successful login
      window.location.href = "/form";
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
        <h1>Login</h1>

        <form onSubmit={handleLogin} className="login-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required /><br />
            <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default Login;