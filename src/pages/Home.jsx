// rafce
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const gotoProduct = () =>{
    navigate('product')
  }
  return (
    <div>
      <h1>Home</h1>

      <p><button onClick={gotoProduct}>Product</button></p>
    </div>
  );
};

export default Home;
