function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "400px" }}
      >
        <h2 className="text-center text-primary mb-4">
          Login
        </h2>

        <div className="mb-3">
          <label className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button className="btn btn-primary w-100">
          Login
        </button>

        <p className="text-center mt-3 mb-0">
          Don't have an account? Register
        </p>
      </div>
    </div>
  );
}

export default Login;