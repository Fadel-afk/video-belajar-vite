import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VideoList from "./components/VideoList";
import HeroBot from "./components/HeroSectionBot";
import Footer from "./Footer";
import "./Home.css";



const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home-content">
        <HeroSection />
        <VideoList />
        <HeroBot />
      </div>

      <Footer/>
    </>
  );
};

export default Home;
