import React from "react";

import "./MainDash.css";
import Header from '../../components/Header'
import Cards from "../../components/Cards";
const MainDash = () => {
  return (
    <div className="MainDash">
      <Header />
      <Cards />
    </div>
  );
};

export default MainDash;
