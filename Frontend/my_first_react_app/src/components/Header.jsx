import { Link } from "react-router-dom";
import circleLogo from "../assets/images/circleLogo-DpCri5UD.png";
function Header() {
  return (
    <>
      <header>
        <div class="header d-flex justify-content-between align-items-center mx-5">
          <div class="headerLogo">
            <Link to="/">
              <img
                src={circleLogo}
                alt="Logo"
                class="img-fluid"
              />
            </Link>
          </div>
          <div class="loginRegister d-flex gap-3">
            <Link to="./login" class="login btn text-white" id="login">
              Login
            </Link>
            <Link to="./register" class="register btn" id="register">
              Register
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
