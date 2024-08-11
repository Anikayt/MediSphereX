import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          MediSphereX Medical Institute stands as a cutting-edge establishment devoted to offering holistic healthcare services with both empathy and proficiency. Our cadre of highly trained professionals is unwavering in their commitment to dispensing bespoke care meticulously designed to address the unique requirements of each patient. At MediSphereX, your well-being is our paramount concern, as we orchestrate a seamless path towards the pinnacle of health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
