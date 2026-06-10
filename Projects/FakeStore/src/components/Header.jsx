import React from "react";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-700 flex justify-between p-3    ">
        <div className="flex gap-3 items-center text-white">
          <h1 className="text-2xl ">FakeStore</h1>
          <IoStorefrontSharp className="text-xl" />
        </div>
        <div className="text-white flex gap-4 text-lg">
          <Link to="/" className="hover:text-red-500 hover:underline offset-5">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-red-500 hover:underline offset-5"
          >
            About
          </Link>
          <Link
            to="/product"
            className="hover:text-red-500 hover:underline offset-5"
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="hover:text-red-500 hover:underline offset-5"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
