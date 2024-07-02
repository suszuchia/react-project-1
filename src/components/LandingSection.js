import React from "react";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <img
        src="./assets/landing-image.png"
        alt="landing image of our website"
        className="landing-image"
      />
      <div className="landing-content">
        <div className="container landing-flex-container">
          <h2 className="landing-heading">
            Our company produce highest quality products.
          </h2>
          <p className="landing-description">
            Don't take our word for it - check it out
          </p>
          <a href="#service" className="landing-button">
            Our offer
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
