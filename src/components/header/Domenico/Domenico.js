import React, { useState } from "react";
import "./domenico.css";

const Domenico = () => {
  const [angle, setAngle] = useState(22.5);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    const newAngle = Math.atan2(y, x) * (180 / Math.PI);
    setAngle(newAngle);
  };

  return (
    <div className="background-container" onMouseMove={handleMouseMove}>
      <div
        className="stylish-text"
        style={{
          "--dynamic-angle": `${angle}deg`,
        }}
      >
        <span className="text-mask">DOMÊNICO</span>
      </div>
    </div>
  );
};

export default Domenico;
