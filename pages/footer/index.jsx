import React from "react";
import group from "../../assets/Group1.png";
import "./footer.css"; // Importing the CSS file for styling

const Index = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <label htmlFor="speed">Speed (MPH): </label>
        <input
          type="range"
          id="speed"
          min="0"
          max="200"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <span>{speed} MPH</span>
      </div>
      <div className="footer-item">
        <label htmlFor="brakePower">Brake Power: </label>
        <input
          type="range"
          id="brakePower"
          min="0"
          max="100"
          value={brakePower}
          onChange={(e) => setBrakePower(e.target.value)}
        />
        <span>{brakePower}</span>
      </div>
      <div className="footer-item">
        <button onClick={handleOrderNow}>Order Now</button>
      </div>
    </footer>
  );
};

// Exporting the component
export default Index;
