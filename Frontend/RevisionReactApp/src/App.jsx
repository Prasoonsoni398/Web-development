import { FaRegUserCircle } from "react-icons/fa";
function App() {
  return (
    <>
      <div className="bg-primary px-3 py-2 d-flex align-items-center justify-content-between">
        <div className="text-warning fw-bold fs-4" id="brand">BRAND</div>
        <div className="text-light d-flex gap-4">
          <span id="navLinks">HOME</span>
          <span id="navLinks">SERVICES</span>
          <span id="navLinks">ABOUT</span>
          <span id="navLinks">CONTACT US</span>
        </div>
        <button className="btn btn-outline-danger text-light d-flex align-items-center gap-2">
          <FaRegUserCircle  /> <span>Sign Up</span>
        </button>
      </div>
    </>
  );
}

export default App;
