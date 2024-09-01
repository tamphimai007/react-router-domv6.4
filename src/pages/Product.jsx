// rafce
import React from "react";
import { Link } from "react-router-dom";




const Product = () => {
  return (
    <div>
      <h1>Product</h1>

      <p>
        <Link to={"p1"}>Asus </Link>
      </p>
      <p>
        <Link to={"p2"}>MSI </Link>
      </p>
      <p>
        <Link to={"p3"}>Lenovo</Link>
      </p>
    </div>
  );
};

export default Product;
