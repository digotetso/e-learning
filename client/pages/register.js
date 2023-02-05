import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const { data } = axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="jumbotron bg-primary text-center">Register</h1>
      <div className="container col-md-4 offset-md-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-4"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mb-4"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-block btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
