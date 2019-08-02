import React from 'react';

function Homepage_ch() {
  return (
    <header>

    <img className="icon" src="/images/pharm.png" />
    <div class ="tag">
    保康西藥房
    </div>
    <div class="containernav">
    <div class="topnav">
    <a href="/ch">首頁</a>
    <a href="/Contact/ch">聯絡</a>
    <a href="/About/ch">關於</a>
    <a href="/">English</a>
    </div>
    </div>
    <div className="homePage">
    首頁
    </div>

    <div className="slider">
      <div className="slide1"></div>
      <div className="slide2"></div>
      <div className="slide3"></div>
      <div className="slide4"></div>
      <div className="slide5"></div>
      <div className="slide6"></div>
    </div>
    </header>
  );
}

export default Homepage_ch;
