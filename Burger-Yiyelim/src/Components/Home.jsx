import React from "react";
import { Link } from "react-router-dom";
import newbanner from "../assets/banneryeni.jpg";
import "../styles/Home.css";
export const Home = () => {
  return (
    <div className="mainPage" style={{ backgroundImage: `url(${newbanner})` }}>
      <div className="order">
        <Link to="/menu">
          <button>Sipariş ver</button>
        </Link>
      </div>
    </div>
  );
};
