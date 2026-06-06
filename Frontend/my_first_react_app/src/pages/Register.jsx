import { useState } from "react";

function Register() {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("UserName :", userName);
    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Confirm Password :", confPass);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="bg-light border rounded shadow mt-5 w-50 p-5">
        <h1 className="fw-bold text-center text-primary">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>

            <input
              type="text"
              className="form-control shadow-none border-2"
              placeholder="Enter Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>

            <input
              type="email"
              className="form-control shadow-none border-2"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password" 
              className="form-control shadow-none border-2"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>

            <input
              type="password"
              className="form-control shadow-none border-2"
              placeholder="Confirm Password"
              value={confPass}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary px-4 py-1" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
