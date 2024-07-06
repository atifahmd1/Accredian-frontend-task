// src/App.js
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ReferralModal from "./components/ReferralModal";
import { CssBaseline } from "@mui/material";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <HeroSection onReferNowClick={handleReferNowClick} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default App;
