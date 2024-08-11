import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us - MediSphereX Medical Institute"}
        imageUrl={"/whoweare.png"}
      />
      <Biography imageUrl={"/about_us.png"} />
    </>
  );
};

export default AboutUs;
