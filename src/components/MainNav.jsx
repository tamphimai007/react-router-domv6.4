// rafce

import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <p>
        <Link to={'/'}>Home </Link>
      </p>
      <p><Link to="product"> Product </Link></p>
    </div>
  );
};

export default MainNav;
