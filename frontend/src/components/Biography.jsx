import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At MediSphereX Medical Institute, we are pioneers in the realm of advanced healthcare, dedicated to delivering comprehensive, patient-centered services with unmatched empathy and expertise. Our institution is more than just a medical facility; it is a sanctuary where cutting-edge technology meets compassionate care.
          </p>
          <p>Our distinguished team of highly trained professionals is resolute in their mission to provide personalized, bespoke care tailored to the individual needs of each patient.</p>
          <p>We understand that every journey to health is unique, and we are committed to ensuring that each step is taken with precision and care.</p>
          <p>
          MediSphereX prioritizes your well-being above all else. We meticulously craft a seamless and harmonious healthcare experience, guiding you toward the highest levels of health and wellness. In every interaction, we strive to embody the values of excellence, integrity, and compassion, making your health our ultimate mission.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
