import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("UserName :", userName);
    console.log("Password :", password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="bg-light shadow rounded w-50 mt-5 p-5 border">
        <h1 className="text-center text-primary fw-bold mb-3">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-grid gap-1">
            <label htmlFor="userName" className="fw-semibold">
              Username
            </label>
            <input
              type="text"
              id="userName"
              className="form-control shadow-none border-2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="d-grid gap-1 mt-3">
            <label htmlFor="password" className="fw-semibold">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="form-control shadow-none border-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary float-end mt-3">
              Login
            </button>
          </div>
          <div className="d-flex mt-3 gap-2">
            <hr className="flex flex-grow-1" />
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register here
              </Link>
            </p>
            <hr className="flex flex-grow-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
