// src/components/HeroSection.js
import React from "react";
import { Button, Container, Typography } from "@mui/material";

const HeroSection = ({ onReferNowClick }) => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", padding: "50px 0" }}>
      <Typography variant="h2" gutterBottom>
        Let's Learn & Earn
      </Typography>
      <Typography variant="h6" gutterBottom>
        Get a chance to win up to Rs. 15,000
      </Typography>
      <Button variant="contained" color="primary" onClick={onReferNowClick}>
        Refer Now
      </Button>
    </Container>
  );
};

export default HeroSection;
