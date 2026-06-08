import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginBg from "../assets/images/foodTable.webp";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("UserName:", userName);
    console.log("Password:", password);
  };

  return (
    <div className="position-relative login w-100 ">
      {/* Background Image */}
      <div className="login-bg">
        <img
          src={loginBg}
          alt="Food Table"
          
        />
      </div>

      {/* Login Card */}
      <div className="login-div card d-grid position-absolute p-4">
        <h2 className="text-center fw-bolder">Welcome Back</h2>
        <p className="text-center">Login to your Cravings account</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="login-input d-grid gap-2 mb-3 mt-2">
            <span className="fw-semibold">Email</span>
            <input
              type="email"
              className="input-field form-control shadow-none"
              placeholder="Enter your Email"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="login-input d-grid gap-2 mb-3">
            <span className="fw-semibold">Password</span>

            <div className="d-flex align-items-center pe-3 input-field border rounded">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control shadow-none bg-transparent border-0"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Remember Me */}
          <div className="remember d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="terms">
                Remember me
              </label>
            </div>

            <Link
              to="/forgot-password"
              className="terms text-decoration-none"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            className="w-100 mt-4 mb-3 py-2 border-0 rounded-2 text-white"
            type="submit"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="d-flex align-items-center mb-3 line terms">
          <hr className="flex-grow-1" />
          <span className="mx-2">Don't have an account?</span>
          <hr className="flex-grow-1" />
        </div>

        <Link
          to="/register"
          className="text-center text-decoration-none"
          id="anchor-underline"
        >
          <b>Create an account</b>
        </Link>
      </div>
    </div>
  );
}

export default Login;