import React from 'react';

function Homepage_ch() {
  return (
    <header>
    <div className="headerbar">
    <img className="icon" src="/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <a href="/ch" className="active">首頁</a>
    <a href="/Contact/ch">聯絡</a>
    <a href="/About/ch">關於</a>
    <a href="/">English</a>
    </div>
    </div>
    </div>

    <div className="sliderC">
    <div className="slider">
      <div className="slide1"></div>
      <div className="slide2"></div>
      <div className="slide3"></div>
      <div className="slide4"></div>
      <div className="slide5"></div>
      <div className="slide6"></div>
    </div>
    </div>
    <div className="homePage"><h1>Why Us?</h1>
    <p>If you are looking for a pharmacy in Richmond, BC, come to Park Pacific Pharmacy. We have 40 years of experience providing prescription medicines, vitamins, first aid supplies, and so much more. We have a variety of products and we are sure to have what you are looking for. We strive to offer our patients with phenomenal service and products that are easily affordable. For a great drug store in Richmond, BC, call on Park Pacific Pharmacy.
    </p></div>
    </header>
  );
}

export default Homepage_ch;
