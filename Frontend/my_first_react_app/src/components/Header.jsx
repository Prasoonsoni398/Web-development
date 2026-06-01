import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="fs-4 fw-bold text-primary">Prasoon</div>
        <div className="d-flex gap-4">
        <Link className="navLinks text-decoration-none text-dark" to="/" >HOME</Link>
        <Link className="navLinks text-decoration-none text-dark" to="/about">ABOUT</Link>
        <Link className="navLinks text-decoration-none text-dark" to="/product">PRODUCT</Link>
        <Link className="navLinks text-decoration-none text-dark" to="/contact">CONTACT</Link>      

        </div>
        <div className="d-flex gap-3">
          <Link className="btn btn-outline-primary" to={"/login"}>LOGIN</Link>
          <Link className="btn btn-primary" to={"/register"}>REGISTER</Link>
        </div>
      </div>
    </> 
  );
}

export default Header;
