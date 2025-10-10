import React from "react";
import { Box } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import StatsSection from "../components/home/StatesSection";
import HospitalMapSection from "../components/home/HospitalMapSection";
import CallToActionSection from "../components/home/CallToActionSection";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <HospitalMapSection />
      <CallToActionSection />
    </Box>
  );
};

export default Home;
