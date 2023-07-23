import React from "react";
import { Route, Routes } from "react-router-dom";
import "./MainDash.css";
import Header from '../../components/Header'
import Nano from '../../pages/Nano';
import Lamsong from '../../pages/Lamsong';
import PhuKienKhac from '../../pages/PhuKienKhac';
import TamPVC from '../../pages/TamPVC';
const MainDash = () => {
  return (
    <div className="MainDash">
      <Header />
      <Routes>
        <Route path="/" element={<TamPVC />} />
        <Route path="/nano" element={<Nano />} />
        <Route path="/lam-song" element={<Lamsong />} />
        <Route path="/phu-kien-khac" element={<PhuKienKhac />} />
      </Routes>
      
    </div>
  );
};

export default MainDash;
