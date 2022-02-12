import React from "react";

import Profile from '../../PortfolioContainer/Home/Profile/Profile'
import Header from '../../PortfolioContainer/Home/Header/Header';
import Footer from '../../PortfolioContainer/Home/Footer/Footer';



import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
   
    </div>
  );
}
