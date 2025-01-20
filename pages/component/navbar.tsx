import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-icon">
          <img style={{ height: "50px", width: "50px" }} src={require("../../assets/logoX.webp")} alt="" />
        </div>
        <div className="navbar-tab">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/photoGallery">
            <p>Photo Gallery</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
