function Register() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center text-success mb-4">Register</h2>

              <div className="mb-3">
                <label className="form-label">Full Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>

              <button className="btn btn-success w-100">Register</button>

              <p className="text-center mt-3 mb-0">
                Already have an account? Login
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
