import React from "react";

function Navigation() {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Policy</li>
        </ul>

        <button>login</button>
      </nav>
    </>
  );
}

export default Navigation;
