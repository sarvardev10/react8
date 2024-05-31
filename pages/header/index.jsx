import React from "react";
import img from "../../assets/Frame.png";
import img1 from "../../assets/Vector.png";
import img2 from "../../assets/img1.png";
import img3 from "../../assets/img2.png";
import "./header.css";

function Index() {
  return (
    <header>
      <div className="conatiner">
        <nav>
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <div className="nav_links">
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
            <a href="#">Solar Roof</a>
            <a href="#">Solar Panel</a>
            <div className="contact">
              <div className="search">
                <img src={img1} alt="" />
                <input type="text" placeholder="Search" />
              </div>
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Index;
