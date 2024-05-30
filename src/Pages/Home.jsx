// import React from 'react'

import Secondsection from "../Components/Secondsection";
import Thirdsection from "../Components/Thirdsection";
import TabSection from "../Components/TabSection";
import Aboutme from "../Components/Aboutme";
import Endorsement from "../Components/Endorsement";
import Reachout from "../Components/Reachout";
import End from "../Components/End";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import backgroundImage from "/Circles.png";

function Home() {
  return (
    <>
      <div
        className="bg-right bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Navbar />
        <Herosection />
      </div>
      <Secondsection />
      <Thirdsection />
      <TabSection />
      <Aboutme />
      <Endorsement />
      <Reachout />
      <End />`
    </>
  );
}

export default Home;
